var homeModule=angular.module('Home',['ngRoute','ui.bootstrap']);

homeModule.config(function ($routeProvider)
{
    $routeProvider
        .when('/',
            {
                templateUrl: '../app/views/Home.html',
                controller: 'HomeController'
            })
        .when('/Product',
            {
                templateUrl: '../app/views/Product.html',
                controller: 'ProductController'
            })
        .when('/ContactUs',
            {
                templateUrl: '../app/views/ContactUs.html',
                controller: 'ContactUsController'
            })
        .otherwise(
            {
                redirectTo: '/'
            })
});
