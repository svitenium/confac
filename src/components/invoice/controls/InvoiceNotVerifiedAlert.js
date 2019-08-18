import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {t} from '../../util';
import moment from 'moment';

import {BusyButton} from '../../controls';
import {Alert} from 'react-bootstrap';
import {toggleInvoiceVerify} from '../../../actions/index';

class InvoiceNotVerifiedAlert extends Component {
  static propTypes = {
    invoice: PropTypes.object.isRequired,
    toggleInvoiceVerify: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {dismissed: false};
  }
  render() {
    const {invoice, toggleInvoiceVerify} = this.props; // eslint-disable-line
    if (this.state.dismissed || invoice.isNew || invoice.verified || invoice.isQuotation) {
      return <div />;
    }

    const daysOpen = moment().diff(invoice.date, 'days');
    return (
      <div>
        <Alert style={{height: 52}} size="sm" variant="info" onClose={() => this.setState({dismissed: true})} dismissible  data-tst="invoice-verify-alert">
          <BusyButton
            variant="info"
            onClick={() => toggleInvoiceVerify(invoice)}
            size="sm"
            style={{marginTop: -5, marginRight: 10, textTransform: 'uppercase'}}
            data-tst="invoice-verify"
          >
            {t('invoice.verifyAction')}
          </BusyButton>
          {t('invoice.isNotVerified')} <small>{t('invoice.notVerifiedFor', { days: daysOpen })}</small>
        </Alert>
      </div>
    );
  }
}

export default connect(() => ({}), {toggleInvoiceVerify})(InvoiceNotVerifiedAlert);
