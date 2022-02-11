import axios from 'axios';
import _ from 'lodash';
import configuration from '../../configs/config.json';

const { http } = configuration;

const client = axios.create({
  baseURL: http.baseUrl,
  headers: http.headers,
});

const fetchAll = () => client.get('Immobile/public');
export default fetchAll;
