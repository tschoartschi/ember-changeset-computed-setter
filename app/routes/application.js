import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import Changeset from 'ember-changeset';

export default Route.extend({
  store: service(),
  model() {
    this.validate = this.validate.bind(this);
    const nativeModel = this.store.createRecord('material', {shading: JSON.stringify({r: 255, g: 0, b: 0})});
    const changeset = new Changeset(nativeModel, this.validate, {validate: this.validate}, {skipValidate: true});
    return {nativeModel, changeset};
  },
  validate() {
    return true;
  }
});
