import { connect, set, ConnectOptions } from 'mongoose';
import { NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } from '@config';

export const dbConnection = async () => {
  const dbConfig = {
    url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  };


  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  connect(dbConfig.url, dbConfig.options as ConnectOptions)
    .then(
      connection => {
        console.log(`src>database>index.tx>dbConnection>then(): MongoDB connected`);
      }
    )
    .catch(
      err => {
        console.log(`src>database>index.tx>dbConnection>catch(): Cannot connect to MongoDB Service ${err}`);
      }
    )
}

