const app = angular.module("shoeStoreApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./views/home.html",
      controller: "HomeController",
    })
    .when("/about", {
      templateUrl: "./views/about.html", 
      controller: "AboutController"
    })
    .when("/product", {
      templateUrl: "./views/product.html", 
      controller: "ProductController"
    })
    .when("/product/new",{
      templateUrl: "./views/product-new.html",
      controller: "NewController"
    })
    .when("/product/featured",{
      templateUrl: "./views/product-featured.html",
      controller: "FeaturedController"
    })
    .when("/product/promotion",{
      templateUrl: "./views/product-promotion.html",
      controller: "PromotionController"
    })
    .otherwise({
      redirectTo: "/",
    });
});
app.controller("AboutController", function($scope){
})

app.controller("ProductController", function ($scope) {
  $scope.products = products;
});
app.controller("NewController", function ($scope) {
  $scope.products = products;
});
app.controller("FeaturedController", function ($scope) {
  $scope.products = products;
});
app.controller("PromotionController", function ($scope) {
  $scope.products = products;
});



app.controller("HomeController", function ($scope) {
  $scope.products = products;
});

