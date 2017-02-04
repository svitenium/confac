import {defaultConfig} from '../../../reducers.js';
import {getNewClient} from '../../client/EditClientViewModel.js';
import EditInvoiceViewModel from '../EditInvoiceViewModel.js';


function createViewModel(config) {
  config = config || defaultConfig;
  const client = getNewClient(config);
  var vm = EditInvoiceViewModel.createNew(config, client);
  return vm;
}

describe('no lines', () => {
  beforeEach(function() {
    this.vm = createViewModel();
  });

  it('should have a total of 0', function() {
    expect(this.vm.money.total).toBe(0);
  });
});

describe('2 daily lines', () => {
  beforeEach(function() {
    this.vm = createViewModel();
    this.vm.addLine({type: 'daily', amount: 1, tax: 21, price: 500});
    this.vm.addLine({type: 'daily', amount: 1, tax: 21, price: 500});
  });

  it('should have correct total', function() {
    expect(this.vm.money).toEqual({
      total: 1210,
      totalTax: 210,
      totalValue: 2,
      totalWithoutTax: 1000,
    });
  });
});



