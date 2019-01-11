import { shallowMount } from '@vue/test-utils'
import CharacterCard from '@/components/CharacterCard.vue';
import character from '../data/character';

const factory = () => {
  return shallowMount(CharacterCard, {
    propsData: {
      character
    },
    mocks: {
      $router: {
        push: function() {}
      }
    }
  });
}

describe('components/CharacterCard', () => {

  // template
  describe('CharacterCard Template', () => {

    test('outputs template with details hidden', () => {
      const wrapper = factory();

      expect(wrapper.find('article').exists()).toBe(true);
      expect(wrapper.find('h1').text()).toBe('Magic-User');
      expect(wrapper.find('p').text()).toBe('5% X.P. bonus');
      expect(wrapper.find('div').isVisible()).toBe(false);
    });

    test('shows details after toggle', () => {
      const wrapper = factory();
      const subHeads = wrapper.findAll('h2');
      const savingThrows = wrapper.find('table');

      wrapper.find('button').trigger('click');

      expect(wrapper.find('div').isVisible()).toBe(true);
      expect(wrapper.find('div').findAll('p').length).toBe(3);
      expect(wrapper.find('div').findAll('table').length).toBe(1); // Because of shallowMount
      expect(subHeads.at(0).text()).toBe('Saving Throws');
      expect(savingThrows.findAll('tr').length).toBe(5);
      expect(savingThrows.find('th').text()).toBe('Death Ray Or Poison');
      expect(subHeads.at(1).text()).toBe('Hit Table');
    });
  });

  // methods
  test('show details button click reveals details and equipment button', () => {
    const wrapper = factory();

    wrapper.find('button').trigger('click');

    expect(wrapper.find('div').isVisible()).toBe(true);
    expect(wrapper.findAll('button').at(1).isVisible()).toBe(true);
  });

  test('buy equipment button tries to navigate to the equipment page', () => {
    const wrapper = factory();
    const spy = jest.spyOn(wrapper.vm, 'getEquipment');
    const routerSpy = jest.spyOn(wrapper.vm.$router, 'push');

    wrapper.find('button').trigger('click');
    wrapper.findAll('button').at(1).trigger('click');

    expect(spy).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith({
      path: '/basic/equipment',
      query: { name: 'Magic-User' }
    });

    spy.mockRestore();
    routerSpy.mockRestore();
  });

  // filters
  test('titleCase', () => {
    expect(CharacterCard.filters.titleCase('camelCase')).toBe('Camel Case');
    expect(CharacterCard.filters.titleCase('cAmelCase')).toBe('C Amel Case');
    expect(CharacterCard.filters.titleCase(' CamelCase')).toBe('  Camel Case');
    expect(CharacterCard.filters.titleCase('kebab-case')).toBe('Kebab-case');
    expect(CharacterCard.filters.titleCase('snake_case')).toBe('Snake_case');
  });
});
