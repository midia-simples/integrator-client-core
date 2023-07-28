import Resource from './Resource';

class Plan extends Resource {
  list(data) {
    return this.request('plan.list', data);
  }
}

export default new Plan();
