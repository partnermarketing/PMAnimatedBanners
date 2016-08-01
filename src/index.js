import 'babel-polyfill';
import Loader from './loader';
import {} from './data';

const interval = setInterval(() => {
  if (typeof stage !== 'undefined') {
    // eslint-disable-next-line no-unused-vars
    const loader = new Loader();
    clearInterval(interval);
  }
}, 1);

// Setup manifest for handling cross origin images
if (window.lib && window.lib.properties && window.lib.properties.manifest) {
  for (const image of lib.properties.manifest) {
    image.crossOrigin = 'Anonymous';
  }
}
