module.exports = Authenticator;

function Authenticator() {
  this.authenticate = function(username, password) {
    if(username === 'user' & password === 'password') {
      return true;
    } else {
      return false;
    }
  };
};
