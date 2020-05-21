import {EditClientRateType, InvoiceDateStrategy, Language, IAudit} from '../../../models';
import {EmailModel} from '../../controls/email/EmailModels';

export type ConfigModel = {
  company: ConfigCompanyModel,
  defaultClient: string | null,
  defaultTax: number,
  attachmentTypes: string[],
  defaultInvoiceLineType: EditClientRateType,
  defaultInvoiceDateStrategy: InvoiceDateStrategy,
  invoicePayDays: number,
  /**
   * The default invoice file name when creating a new client
   */
  invoiceFileName: string,

  /**
   * Default values for email sending
   * (not all are configurable)
   */
  email: EmailModel,
  /** The signature for all emails */
  emailSignature: string,
  /** Email body for invoice reminder emails */
  emailReminder: string,
  emailReminderCc: string,
  emailReminderBcc: string,
  language: Language,
  audit: IAudit;
}

export type ConfigCompanyModel = {
  name: string,
  address: string,
  city: string,
  btw: string,
  rpr: string,
  bank: string,
  iban: string,
  bic: string,
  telephone: string,
  email: string,
  website: string,
  template: string,
  templateQuotation: string,
}
