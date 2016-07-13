import util from '../../src/util';

describe('util', function () {

  let el;

  beforeAll(() => {
    el = document.createElement('div');
    el.className = 'has-class';
  });


  it('should check element for class and find a match', () => {
    expect(util.hasClass(el, 'has-class')).toEqual(true);
  });

  it('should check element for class and find no match', () => {
    expect(util.hasClass(el, 'not-this-class')).toEqual(false);
  });

  it('should add class to element', () => {
    el.className = '';
    util.addClass(el, 'has-another-class');
    expect(util.hasClass(el, 'has-another-class')).toEqual(true);
  });

  it('should remove class from element', () => {
    expect(util.hasClass(el, 'has-another-class')).toEqual(true);
    util.removeClass(el, 'has-another-class');
    expect(util.hasClass(el, 'has-another-class')).toEqual(false);
  });

  it('should find an objects child value by key', () => {
    let obj = {
      children: [{}, {}, {
        children: [{}, {}, {
          children: [{
            foobar: 'foobar'
          }]
        }]
      }]
    };
    expect(util.searchAnimateChildren(obj, 'foobar')).toEqual('foobar');
  });

});
