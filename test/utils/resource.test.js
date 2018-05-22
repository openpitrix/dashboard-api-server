const { keys } = require('lodash');
const resMap = require('../../resource-map');

let resource;
describe('resource test suite', () => {
  beforeEach(() => {
    resource = require('../../utils/resource');
  });

  describe('getPrefix', () => {
    it('expected res prefix should not be undefined', () => {
      keys(resMap).map(name => {
        expect(resource.getPrefix(name)).toBeDefined();
      });
    });

    it('unexpected res prefix should be undefined', () => {
      let invalid_res = ['abc', 'fake', 'not valid res'];
      invalid_res.map(name => {
        expect(resource.getPrefix(name)).toBeUndefined();
      });
    });
  });

  describe('getResourceSetName', () => {
    it('valid res', () => {
      expect(resource.getResourceSetName('apps')).toEqual(expect.stringContaining('app_set'));
    });

    it('invalid res output undefined_set', () => {
      expect(resource.getResourceSetName('evil res')).toEqual(
        expect.stringContaining('undefined_set')
      );
    });
  });

  describe('getPrimaryKey', () => {
    it('valid res primary key', () => {
      expect(resource.getPrimaryKey('apps')).toBe('app_id');
    });

    it('invalid res primary key fallback to id', () => {
      expect(resource.getPrimaryKey('evil res')).toBe('id');
    });
  });

  describe('getResourceNameFromRequest', () => {
    it('invalid request should throw error', () => {
      expect(() => resource.getResourceNameFromRequest({})).toThrow();
    });

    it('valid request path prefix with /', () => {
      let req = { path: '/app/xx-123' };
      expect(resource.getResourceNameFromRequest(req)).not.toBe(expect.stringMatching(/^\/.+/));
    });

    it('valid request path prefix without /', () => {
      let req = { path: 'app/xx-123' };
      expect(resource.getResourceNameFromRequest(req)).toBe('app');
    });
  });
});
