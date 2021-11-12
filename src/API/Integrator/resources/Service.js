import Resource from './Resource';

class Service extends Resource {
  list(data) {
    return this.request('service.list', data);
  }

  detail(data) {
    return this.request('service.detail', data);
  }
}

export default new Service();
