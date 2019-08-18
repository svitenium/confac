import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {EditInvoiceViewModel} from '../../util';
import * as Control from '../../controls';

export class EditInvoiceSectionLine extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    invoice: PropTypes.instanceOf(EditInvoiceViewModel).isRequired,
    line: PropTypes.object.isRequired,
  }

  render() {
    const {index, onChange, invoice, line} = this.props;
    return [
      <td key="0">
        <Control.StringInput
          value={line.desc}
          onChange={value => onChange(invoice.updateLine(index, {desc: value}))}
          data-tst={`line-${index}-desc`}
        />
      </td>
      ,
      <td key="1">
        <Control.InvoiceLineTypeSelect
          type={line.type}
          onChange={value => onChange(invoice.updateLine(index, {type: value}))}
          data-tst={`line-${index}-type`}
        />
      </td>
      ,
      <td key="2" colSpan={4}>&nbsp;</td>
    ];
  }
}
