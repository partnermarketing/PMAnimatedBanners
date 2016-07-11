/**
 * Utility module for generic methods
 */
export default {

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

};
