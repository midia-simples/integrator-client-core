import Resource from './Resource';

class Service extends Resource {
  list(data) {
    return this.request('service.list', data);
  }

  detail(data) {
    return this.request('service.detail', data);
  }
  
  details(data) {
    return this.request('services.details', data);
  }

  speed(data) {
    return this.request('service.getVelocidades', data);
  }
}

export default new Service();
