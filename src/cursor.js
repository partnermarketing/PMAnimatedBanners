import util from './util';

/**
 * Cursor module for controlling hover states in the canvas, will inject
 * custom css rules into the DOM and return methods for changing the
 * cursor.
 *
 * @return {Object} Object literal with methods for setting and getting
 *                  the cursor, accepted cursor types 'pointers' and
 *                  'default'
 */
export default (() => {
  // inject css rules into the dom
  (head => {
    // set css rules
    const css = `
      canvas#canvas {
        cursor: default !important;
      }
      canvas#canvas.has-pointer {
        cursor: pointer !important;
      }
    `;
    const style = document.createElement('style');

    // insert css rules to stylesheet
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    // inject to head
    head.appendChild(style);
  })(document.head || document.getElementsByTagName('head')[0]);

  let cursor;
  return {

    /**
     * set cursor state for canvas
     *
     * @param  {String} state [the cursor state, accepts either 'pointer' or 'default']
     * @return {Void} Void
     */
    set: state => {
      cursor = state;
      if (cursor === 'pointer') {
        util.addClass(stage.canvas, 'has-pointer');
      } else {
        util.removeClass(stage.canvas, 'has-pointer');
      }
    },

    /**
     * gets cursor state
     *
     * @return {String} the current cursor
     */
    get: () => cursor,

  };
})();
