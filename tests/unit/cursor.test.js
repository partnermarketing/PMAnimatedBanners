import cursor from '../../src/cursor';

describe('util', function () {

  it('should set the cursor', () => {
    cursor.set('pointer');
    expect(cursor.get()).toEqual('pointer');
  });

});
