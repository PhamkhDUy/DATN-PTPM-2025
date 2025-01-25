const app = angular.module("shoeStoreApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./views/home.html",
      controller: "HomeController",
    })
    .when("/about",{
      templateUrl: "./view/about.html",
      controller: ""
    })
    .otherwise({
      redirectTo: "/",
    });
});

app.controller("HomeController", function ($scope) {
  // Gắn dữ liệu từ product.js vào $scope.products
  $scope.products = products;
});

