import DS from 'ember-data';
import {computed} from '@ember/object';
import {run} from '@ember/runloop';
const {Model} = DS;

export default Model.extend({
  shading: DS.attr('string'),

  getter() {
    const {r, g, b} = JSON.parse(this.shading);
    return `rgb(${r},${g},${b})`;
  },
  setter(_key, {r, g, b}) {
    const shading = JSON.parse(this.shading);
    shading.r = r;
    shading.g = g;
    shading.b = b;
    // to be honest, I do not know why we need run.later here
    // without run.later the input is just empty :-( in our
    // production code we do not need run.later. But we use
    // native ES6 classes. Here I just wanted to use what
    // ember-cli generates when you run the command init
    run.later(() => this.set('shading', JSON.stringify(shading)), 0);
  },

  basecolor: computed('shading', {
    get() {
      return this.getter();
    },
    set(_key, color) {
      this.setter(_key, color);
    }
  }),

  get basecolorNative() {
    return this.getter();
  },

  set basecolorNative(color) {
    this.setter(undefined, color);
  }

});
