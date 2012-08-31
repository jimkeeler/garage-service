function Authorizer() {
  this.authorize = function(username, password) {
    if(username === 'user' & password === 'password') {
      return true;
    } else {
      return false;
    }
  };
};

exports.Authorizer = Authorizer;
