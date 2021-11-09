import Resource from './Resource';

class AuthorizationLogin extends Resource {
  list(data) {
    return this.request('sap.lista_login', data);
  }
}

export default AuthorizationLogin;
