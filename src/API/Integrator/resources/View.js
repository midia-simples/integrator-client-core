import Resource from './Resource';

class View extends Resource {
  execute(data) {
    return this.request('view.execute', data);
  }
}

export default View;
