import App from './app';
import PaymentController from '../payment/payment.controller';
import '../__ignore/mocks/service';

const app = new App([new PaymentController()]);

app.listen();
