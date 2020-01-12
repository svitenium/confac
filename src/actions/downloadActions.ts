import request from 'superagent-bluebird-promise';
import moment from 'moment';
import {buildUrl, catchHandler} from './utils/fetch';
import InvoiceModel from '../components/invoice/models/InvoiceModel';
import {Attachment} from '../models';
import {ClientModel} from '../components/client/models/ClientModels';
import {getInvoiceFileName, getDownloadUrl, previewPdf, downloadAttachment} from './utils/download-helpers';


export function getInvoiceDownloadUrl(
  invoice: InvoiceModel,
  attachment: 'pdf' | Attachment = 'pdf',
  downloadType?: 'preview' | 'download',
): string {

  const fileType = invoice.isQuotation ? 'quotation' : 'invoice';
  const fileName = attachment === 'pdf' || attachment.type === 'pdf' ? getInvoiceFileName(invoice) : attachment.fileName;
  const attachmentType = attachment === 'pdf' ? 'pdf' : attachment.type;
  // return buildUrl(`/attachments/${fileType}/${invoice._id}/${attachmentType}/${encodeURIComponent(fileName)}${query}`);

  return getDownloadUrl(fileType, invoice._id, attachmentType, fileName, downloadType);
}


export function getClientDownloadUrl(
  client: ClientModel,
  attachment: Attachment,
  downloadType: 'preview' | 'download' = 'download',
): string {
  return getDownloadUrl('client', client._id, attachment.type, attachment.fileName, downloadType);
}






export function previewInvoice(data: InvoiceModel) {
  return (dispatch) => {
    request.post(buildUrl('/invoices/preview'))
      .responseType('blob')
      .send(data)
      .then((res) => {
        // console.log('previewInvoice response', res.body);
        previewPdf(getInvoiceFileName(data), res.body);
        return res.text;
      })
      .catch(catchHandler);
  };
}






export function downloadInvoicesExcel(ids: string[]) {
  return (dispatch) => {
    request.post(buildUrl('/invoices/excel'))
      .responseType('blob')
      .send(ids)
      .then((res) => {
        console.log('downloaded', res); // eslint-disable-line
        const fileName = `invoices-${moment().format('YYYY-MM-DD')}.csv`;
        downloadAttachment(fileName, res.body);
      });
  };
}


export function downloadInvoicesZip(ids: string[]) {
  return (dispatch) => {
    request.post(buildUrl('/attachments'))
      .responseType('blob')
      .send(ids)
      .then((res) => {
        // console.log('downloaded', res);
        const fileName = `invoices-${moment().format('YYYY-MM-DD')}.zip`;
        downloadAttachment(fileName, res.body);
      });
  };
}
