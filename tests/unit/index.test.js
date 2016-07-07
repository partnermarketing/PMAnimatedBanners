import index from '../../src/index';
import Loader from '../../src/loader';

describe('index', function () {
  it('should instantiate and return a loader', ()=>{
    expect(index instanceof Loader).toEqual(true);
  });
});