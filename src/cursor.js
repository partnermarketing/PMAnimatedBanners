import util from './util';

export default (() => {
  (head => {
    // Inject css rules for cursor events
    const css = `
      canvas#canvas {
        cursor: default !important;
      }
      canvas#canvas.has-pointer {
        cursor: pointer !important;
      }
    `;
    const style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  })(document.head || document.getElementsByTagName('head')[0]);

  let cursor;

  return {

    set: state => {
      cursor = state;
      if (cursor === 'pointer') {
        util.addClass(stage.canvas, 'has-pointer');
      } else {
        util.removeClass(stage.canvas, 'has-pointer');
      }
    },

    get: () => cursor,

  };
})();
