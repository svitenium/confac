
export function getNewClient(config) {
  return {
    active: true,
    name: '',
    address: '',
    city: '',
    telephone: '',
    btw: '',
    invoiceFileName: '{date:YYYY-MM} {nr:4} - ',
    rate: {
      type: config.defaultInvoiceLineType,
      hoursInDay: 8,
      value: 0,
      description: '',
    },
    attachments: [],
    extraFields: config.defaultExtraClientFields.slice(),
    defaultExtraInvoiceFields: config.defaultExtraClientInvoiceFields.slice(),
  };
}

export const defaultClientProperties = [{
  key: 'name',
}, {
  key: 'slug',
  updateOnly: true,
}, {
  key: 'btw',
}, {
  key: 'address',
}, {
  key: 'city',
}, {
  key: 'telephone',
}, {
  key: 'contact',
}, {
  key: 'contactEmail',
}];
