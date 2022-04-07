import Vue from 'vue';

// axios
import axios from 'axios';

const axiosIns = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 200,
    headers: { 'X-Custom-Header': 'foobar' },
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
