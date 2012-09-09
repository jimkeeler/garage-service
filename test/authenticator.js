var assert = require('assert')
  , Authenticator = require('../lib/authenticator');

describe('Authenticator', function() {
  var auth;
  
  beforeEach(function() {
    auth = new Authenticator();
  });
  
  describe('.authenticate(user, pass)', function() {
    it('should authenticate only \'user\' and \'password\'', function() {
      assert(auth.authenticate('user', 'password') == true);
      assert(auth.authenticate('username', 'password') == false);
      assert(auth.authenticate('', '') == false);
    });
  });
});