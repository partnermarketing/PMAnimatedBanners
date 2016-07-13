/**
 * Utility module for generic methods
 */
const util = {

  /**
   * has class method, will determine if element has a class
   *
   * @param  {Element} el [the element to check]
   * @param  {String} className [the class to look for]
   * @return {Boolean} [if element has class]
   */
  hasClass: (el, className) => {
    let hasClass;
    if (el.classList) {
      hasClass = el.classList.contains(className);
    } else {
      hasClass = !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
    }
    return hasClass;
  },

  /**
   * add class method, will add a class to an element
   *
   * @param  {Element} el [the element to include class on]
   * @param  {String} className [the class to add]
   * @return {Void} Void
   */
  addClass: (el, className) => {
    if (el.classList) {
      el.classList.add(className);
    } else if (!this.hasClass(el, className)) {
      // eslint-disable-next-line no-param-reassign
      el.className += ` ${className}`;
    }
  },

  /**
   * remove class method, will remove a class from an element
   *
   * @param  {Element} el [the element to remove class from]
   * @param  {String} className [the class to remove]
   * @return {Void} Void
   */
  removeClass: (el, className) => {
    if (el.classList) {
      el.classList.remove(className);
    } else if (this.hasClass(el, className)) {
      // eslint-disable-next-line no-param-reassign
      el.className = el.className.replace(new RegExp(`(\\s|^)${className}(\\s|$)`), ' ');
    }
  },

  /**
   * search animate children method, for searching the stage for
   * an animate CC reference
   *
   * @param  {Object} obj [the object to search]
   * @param  {String} prop [the key to search for]
   * @return {Object|Undefined} if found will return the createjs shape
   */
  searchAnimateChildren: (obj, prop) => {
    let match;
    // Loop children
    if (obj.children) {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in obj.children) {
        // If match found break and return
        if (obj.children[key][prop]) {
          match = obj.children[key][prop];
          break;
        // If no match recursively check this children
        } else if (obj.children[key].children && obj.children[key].children.length !== 0) {
          const nextScan = util.searchAnimateChildren(obj.children[key], prop);
          if (nextScan) {
            match = nextScan;
            break;
          }
        }
      }
    }
    return match;
  },

};

export default util;
