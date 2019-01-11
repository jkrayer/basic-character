import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'
import EquipmentTable from '@/components/EquipmentTable.vue';

const factory = (propsData = {}) => {
  return shallowMount(EquipmentTable, { propsData });
}

describe('components/EquipmentTable', () => {

  // data
  test('makes armor table', () => {
    const wrapper = factory({
      header: ['Name', 'AC', 'Cost'],
      body: [{
        name: 'Lamellar',
        ac: 6,
        cost: 20
      }]
    });

    const theadThs = wrapper.findAll('thead th');
    const tbodyTrs = wrapper.findAll('tbody tr');

    expect(wrapper.find('thead').exists()).toBe(true);
    expect(theadThs.length).toBe(3);
    expect(theadThs.at(1).text()).toBe('AC');
    expect(wrapper.find('tbody').exists()).toBe(true);
    expect(tbodyTrs.length).toBe(1);
    expect(tbodyTrs.at(0).findAll('td').at(1).text()).toBe('20 gp.');
  });

  test('makes weapon table', () => {
    const wrapper = factory({
      header: ['Name', 'AC', 'Cost', 'Notes'],
      body: [{
        name: 'Broad Sword',
        damage: '1d8/1d10',
        cost: 20,
        notes: 'One or two handed'
      }]
    });

    const theadThs = wrapper.findAll('thead th');
    const tbodyTrs = wrapper.findAll('tbody tr');

    expect(wrapper.find('thead').exists()).toBe(true);
    expect(theadThs.length).toBe(4);
    expect(theadThs.at(3).text()).toBe('Notes');
    expect(wrapper.find('tbody').exists()).toBe(true);
    expect(tbodyTrs.length).toBe(1);
    expect(tbodyTrs.at(0).findAll('td').at(0).text()).toBe('1d8/1d10');
    expect(tbodyTrs.at(0).findAll('td').at(2).text()).toBe('One or two handed');
  });
});
