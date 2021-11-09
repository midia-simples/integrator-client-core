import Client from '../http/Client';

class Resource {
  constructor() {
    this.client = new Client();
    this.api = this.client.api;
  }

  async request(methodName, params) {
    const body = this.client.createBody('list', methodName, params);
    const response = await this.api(body);
    return response;
  }
}

export default Resource;
