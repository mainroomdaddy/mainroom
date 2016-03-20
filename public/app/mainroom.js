var mainroom = angular.module('mainroom', ['ui.router']);

mainroom.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $urlRouterProvider.otherwise("/home");
    
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/home/views/home.html",
            controller: "home-controller"
        })
        
        ;
 
});