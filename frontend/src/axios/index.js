import axios from "axios";

const http = axios.create({
  baseURL: 'http://api.agency.test',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (getCookie('XSRF-TOKEN') !== 'undefined') {
  http.get('/sanctum/csrf-cookie');
}

export default http;