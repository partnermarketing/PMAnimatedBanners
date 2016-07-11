export default {

  hasClass: (el, className) => {
    let hasClass;
    if (el.classList) {
      hasClass = el.classList.contains(className);
    } else {
      hasClass = !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
    }
    return hasClass;
  },

  addClass: (el, className) => {
    if (el.classList) {
      el.classList.add(className);
    } else if (!this.hasClass(el, className)) {
      // eslint-disable-next-line no-param-reassign
      el.className += ` ${className}`;
    }
  },

  removeClass: (el, className) => {
    if (el.classList) {
      el.classList.remove(className);
    } else if (this.hasClass(el, className)) {
      // eslint-disable-next-line no-param-reassign
      el.className = el.className.replace(new RegExp(`(\\s|^)${className}(\\s|$)`), ' ');
    }
  },

};
