import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { WerkprocesRoute } from './routes/werkproces.route';
import { ValidateEnv } from '@utils/validateEnv';
import { KerntaakRoute } from './routes/kerntaak.route';
import { CreboRoute } from './routes/crebo.route';

ValidateEnv();

const app = new App([
    new AuthRoute(),
    new WerkprocesRoute(),
    new KerntaakRoute(),
    new CreboRoute(),
]);


app.listen();
