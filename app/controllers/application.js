import Controller from '@ember/controller';

const stringToRgbArray = (string) => string.replace('rgb(', '').replace(')', '').split(',');

export default Controller.extend({

  changeBasecolorNative(value) {
    const rgb = stringToRgbArray(value);
    this.set('model.nativeModel.basecolor', {r: rgb[0], g: rgb[1], b: rgb[2]});
  },

  changeBasecolorChangset(value) {
    const rgb = stringToRgbArray(value);
    this.set('model.changeset.basecolor', {r: rgb[0], g: rgb[1], b: rgb[2]});
  }

});
