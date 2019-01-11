import { mount } from '@vue/test-utils'
import ScoreForm from '@/components/ScoreForm.vue';

const factory = () => {
  return mount(ScoreForm);
}

describe('components/ScoreForm', () => {
  test('template shows score fields', () => {
    const wrapper = factory();
    const inputs = wrapper.findAll('input');
    const button = wrapper.find('button');

    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.findAll('label').length).toBe(6);
    expect(inputs.length).toBe(6);
    expect(button.exists()).toBe(true);
    expect(button.attributes('disabled')).toBe('disabled');
  });

  test('form emits scores', () => {
    const wrapper = factory();
    const spy = jest.spyOn(wrapper.vm, '$emit');
    const scores = {
      Strength: 12,
      Intelligence: 12,
      Wisdom: 12,
      Dexterity: 12,
      Constitution: 12,
      Charisma: 12
    };

    Object.keys(scores).forEach(score => wrapper.vm.$data.scores[score] = 12);
    wrapper.vm.validateScores();

    expect(wrapper.vm.scores.Strength).toBe(12);
    expect(spy).toHaveBeenCalledWith('submit', scores);

    spy.mockRestore();
  });
});
