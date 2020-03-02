angular.module('mycontroller', [])
.controller('ExampleController', function ExampleController(){
    this.username = 'maria';
    this.password = 'mariapass123';

    this.login = function Login(username, password){
        if (this.username != username || this.password != password)
        {
            window.alert('Login unsuccessful');
        }
        else 
        {
            window.alert('Login successful')
        }
    }

})