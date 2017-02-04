import React, {Component, PropTypes} from 'react';
import {t, EditInvoiceViewModel} from '../util.js';

import {NumericInput, StringInput, AddIcon, DeleteIcon} from '../controls.js';
import {Table} from 'react-bootstrap';

export default class EditInvoiceLines extends Component {
  static propTypes = {
    invoice: PropTypes.instanceOf(EditInvoiceViewModel).isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const {invoice, onChange} = this.props;
    const lines = invoice.lines;
    return (
      <Table condensed>
        <thead>
          <tr>
            <th width="40%">{t('client.projectDesc')}</th>
            <th width="20%">{t('invoice.hours')}</th>
            <th width="20%">{t('client.hourlyRate')}</th>
            <th width="19%">{t('config.company.btw')}</th>
            <th width="1%">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line, index) => {
            return (
              <tr key={index}>
                <td>
                  <StringInput
                    value={line.desc}
                    onChange={value => onChange(invoice.updateLine(index, {desc: value}))}
                  />
                </td>

                <td>
                  <NumericInput
                    float
                    value={line.value}
                    onChange={value => onChange(invoice.updateLine(index, {value: value}))}
                  />
                </td>

                <td>
                  <NumericInput
                    prefix="€"
                    float
                    value={line.rate}
                    onChange={value => onChange(invoice.updateLine(index, {rate: value}))}
                  />
                </td>

                <td>
                  <NumericInput
                    suffix="%"
                    float
                    value={line.tax}
                    onChange={value => onChange(invoice.updateLine(index, {tax: value}))}
                  />
                </td>

                <td>
                  {index > 0 ? <DeleteIcon onClick={() => onChange(invoice.removeLine(index))} /> : <div />}
                </td>
              </tr>
            );
          })}
          {lines.length ? (
            <tr>
              <td colSpan={4}>
                <AddIcon onClick={() => onChange(invoice.addLine())} label={t('invoice.addLine')} size={1} />
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>
    );
  }
}
