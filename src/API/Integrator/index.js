import Bill from './resources/Bill';
import NotaFiscal from './resources/NotaFiscal';
import Customer from './resources/Customer';
import Contact from './resources/Contact';
import Datasource from './resources/Datasource';
import Provisional from './resources/Provisional';
import View from './resources/View';
import DueDate from './resources/DueDate';
import PaymentMethods from './resources/PaymentMethods';
import Attendence from './resources/Attendence';
import Ged from './resources/Ged';
import AuthorizationLogin from './resources/AuthorizationLogin';
import ConnectionExtract from './resources/ConnectionExtract';
import Service from './resources/Service';

class Integrator {
  constructor() {
    this.Bill = new Bill();
    this.NotaFiscal = new NotaFiscal();
    this.Customer = new Customer();
    this.Contact = new Contact();
    this.Provisional = new Provisional();
    this.Datasource = new Datasource();
    this.View = new View();
    this.DueDate = new DueDate();
    this.PaymentMethods = new PaymentMethods();
    this.Attendence = new Attendence();
    this.Ged = new Ged();
    this.AuthorizationLogin = new AuthorizationLogin();
    this.ConnectionExtract = new ConnectionExtract();
    this.Service = new Service();
  }
}
export default Integrator;
