import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input.vue';

const factory = (values = {}, propsData = {}) => {
  return shallowMount(Input, {
    data() {
      return { ...values };
    },
    propsData
  });
}

describe('components/Input', () => {

  // data
  test('sets default data to an empty string', () => {
    const wrapper = factory({}, { id: 'my-id' });

    expect(wrapper.vm.data).toBe('');
  });

  // Test Transmit
  // A little dis-satisfied with this. Feels dirty to call the method directly.
  // seems like I should be triggering the event and observing accordingly.
  // But maybe that's excercising the event system and unnecessary.
  test('calls transmitValue on value change', () => {
    const wrapper = factory({}, { id: 'my-id' });
    const wrapper2 = factory({ data: 'custom value' }, { id: 'my-id' });
    const spy = jest.spyOn(wrapper.vm, '$emit');
    const spy2 = jest.spyOn(wrapper2.vm, '$emit');

    wrapper.vm.transmitValue();
    wrapper2.vm.transmitValue();

    Vue.nextTick(() => {
      expect(spy).toHaveBeenCalledWith('inputBlur', { id: 'my-id', value: '' });
      expect(spy2).toHaveBeenCalledWith('inputBlur', { id: 'my-id', value: 'custom value' });
      spy.mockRestore();
      spy2.mockRestore();
    });

  }, 500);

  // the following tests excercise (perhaps) core VUE functionality and may
  // therefore be unnecessary

  // instantiation
  // TODO Suppress the console statment
  test.skip('warns when a required attribute is not set', () => {
    const spy = jest.spyOn(console, 'error');
    const wrapper = factory();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

  test('sets data to a passed value', () => {
    const wrapper = factory({ data: 12 }, { id: 'my-id' });

    expect(wrapper.vm.data).toBe(12);
  });

  // arbitrary props
  test('sets props that are not declared in the component', () => {
    const wrapper = factory({}, { id: 'my-id', class: 'my-class', autofocus: true });
    const input = wrapper.find('input');

    expect(input.classes()).toContain('my-class');
    expect(input.attributes('autofocus')).toBe('autofocus');
  });

  // override props
  test('sets props and overrides props', () => {
    const wrapper = factory({}, { id: 'my-id', min: 3, max: 18, type: 'number' });
    const input = wrapper.find('input');

    expect(input.attributes('min')).toBe('3');
    expect(input.attributes('max')).toBe('18');
    expect(input.attributes('type')).toBe('number');
  });
});
