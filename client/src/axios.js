import axios from "axios";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: !isLocalhost
    ? process.env.REACT_APP_LOCAL_API_URL
    : process.env.REACT_APP_REMOTE_API_URL,
  // withCredentials: true,
});

console.log(process.env.REACT_APP_LOCAL_API_URL)

export default instance;
