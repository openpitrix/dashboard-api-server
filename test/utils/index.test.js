describe('utils index', () => {
  let index = require('../../utils');

  it('should contains gen, logger, resource', () => {
    expect(index).toEqual(
      expect.objectContaining({
        gen: expect.any(Object),
        logger: expect.any(Object),
        resource: expect.any(Object)
      })
    );
  });
});
