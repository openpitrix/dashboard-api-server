describe('gen test suite', () => {
  let gen;
  beforeEach(() => {
    gen = require('../../utils/gen');
  });

  describe('generate resource id', () => {
    it('missing type will throw error', () => {
      expect(() => gen.genResourceId()).toThrow();
    });

    it('id prefix is matched', () => {
      let id = gen.genResourceId('apps');
      expect(id).toEqual(expect.stringMatching(/^app-\w{8}/));
    });

    it('id prefix is undefined', () => {
      let id = gen.genResourceId('oops');
      expect(id).toEqual(expect.stringMatching(/undefined\w{8}/));
    });

    it('uuid max length is 32', () => {
      let id = gen.genResourceId('apps', 100);
      id = id.substr(4);
      expect(id.length).toBe(32);
    });

    it('will call resource.getPrefix', () => {
      jest.mock('../../utils/resource');
      const resource = require('../../utils/resource');
      let id = resource.getPrefix('any', resource);

      expect(id).toEqual(expect.stringContaining('app-'));
      expect(resource.getPrefix.mock.calls.length).toBe(1);
    });
  });
});
