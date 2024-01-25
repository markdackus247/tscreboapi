import { connect, set } from 'mongoose';
import { NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } from '@config';

export const dbConnection = async () => {
  const dbConfig = {
    url: 'mongodb://challengemeapi:iXyO3Vo5oCfmKHjCYNHbxLJaO7xUlMVk@localhost:27017/?authSource=challengemeapi',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  };

  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  await connect(dbConfig.url, dbConfig.options);
}

    // url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
    // url: `mongodb://${DB_USERNAME}:${DB_PASSWORD}\@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=${DB_USERNAME}`,
