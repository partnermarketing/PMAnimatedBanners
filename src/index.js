import Loader from './loader';
import {} from './data';

const interval = setInterval(() => {
  if (stage) {
    // eslint-disable-next-line no-unused-vars
    const loader = new Loader();
    clearInterval(interval);
  }
}, 1);
