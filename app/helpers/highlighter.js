import Ember from 'ember';

const {
  run
} = Ember;

export function highlighter([context, keyword="the"]) {

  return render(context, keyword);

  function render(context, keyword) {
    run.schedule('afterRender', this, () => {
      var instance = new Mark(`.${context}`);
      instance.mark(keyword);
    });
  }
}

export default Ember.Helper.helper(highlighter);
