import { shallowMount } from '@vue/test-utils'
import TableVerticle from '@/components/TableVerticle.vue';

const factory = () => {
  return shallowMount(TableVerticle, {
    propsData: {
      data: [
        ['Dad', 'Fred', 'Barney'],
        ['Mom', 'Wilma', 'Betty'],
        ['Kid', 'Pebbles', 'Bam Bam']
      ]
    }
  });
}

describe('components/TableVerticle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = factory({
    });
  });

  // data
  test('makes a table with 3 rows and 3 columns', () => {
    const theadThs = wrapper.findAll('thead th');
    const tbodyTrs = wrapper.findAll('tbody tr');

    expect(wrapper.find('thead').exists()).toBe(true);
    expect(theadThs.length).toBe(3);
    expect(theadThs.at(0).text()).toBe('Dad');
    expect(wrapper.find('tbody').exists()).toBe(true);
    expect(tbodyTrs.length).toBe(2);
    expect(tbodyTrs.at(0).findAll('td').at(2).text()).toBe('Pebbles');
    expect(tbodyTrs.at(1).findAll('td').at(1).text()).toBe('Betty');
  });

  // methods
  test('the body size should be 2', () => {
    expect(wrapper.vm.size()).toBe(2);
  });

  test('concats some values for header keys', () => {
    expect(wrapper.vm.hash('a', ['B', 1])).toBe('aB1');
  });
});
