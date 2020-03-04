angular.module('controller', [])
.controller('ExampleController', ['$username', "$pass", function( $username, $pass) {
  $username = 'maria';
  $pass = 'maria123';
  function Login($username, $pass){
     
    $window.alert('alvnl/adfn');
  };
}]);