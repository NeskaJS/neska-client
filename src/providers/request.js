import axios from 'axios';
import { C } from 'Constants';
import { ServiceSession } from 'Services';
import { ProviderError } from 'Providers';

const API_URL = `${C.API[process.env.NODE_ENV.toUpperCase()]}/graphql`;

export default function ({ query, variables }) {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL, { query, variables })
      .then(response => {
        const { status, data } = response;

        if (status === 401) return ServiceSession.logout();
        if (data.errors.length > 0) return ProviderError.send(data.errors);

        return resolve(data);
      })
      .catch(err => reject(err));
  });
}
