import Ember from 'ember';

export default Ember.Controller.extend({
  tableColumns: [
    {
      name: 'foo',
      label: 'Foo',
      order: 1
    },
    {
      name: 'bar',
      label: 'Bar',
      order: 2
    }
  ],
  tableData: [
    {
      foo: 'abc',
      bar: 'def'
    },
    {
      foo: 'ghi',
      bar: 'jkl'
    }
  ],
  tableConfig: {
    sortProperties: ['foo', 'bar']
  }
});
