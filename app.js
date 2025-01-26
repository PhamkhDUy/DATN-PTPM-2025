const app = angular.module("shoeStoreApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./views/home.html",
      controller: "HomeController",
    })
    .when("/about", {
      templateUrl: "./views/about.html",
      controller: "AboutController",
    })
    .when("/product", {
      templateUrl: "./views/product.html",
      controller: "ProductController",
    })
    .when("/product/new", {
      templateUrl: "./views/product/product-new.html",
      controller: "NewController",
    })
    .when("/product/featured", {
      templateUrl: "./views/product/product-featured.html",
      controller: "FeaturedController",
    })
    .when("/product/promotion", {
      templateUrl: "./views/product/product-promotion.html",
      controller: "PromotionController",
    })
    .when("/product/id/:productId", {
      templateUrl: "./views/product/detailProduct.html",
      controller: "DetailProductController",
    })
    .otherwise({
      redirectTo: "/",
    });
});
app.controller("AboutController", function ($scope) {});

app.controller("ProductController", function ($scope) {
  $scope.products = products;
  $scope.quantity = 1;

  $scope.increment = function () {
    $scope.quantity += 1;
  };

  $scope.decrement = function () {
    if ($scope.quantity > 1) {
      $scope.quantity -= 1;
    }
  };
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

app.controller("DetailProductController", function ($scope, $routeParams) {
  const productId = parseInt($routeParams.productId);
  $scope.products = products;

  $scope.selectedProduct   = products.find(function (product) {
    return product.id === productId;
  });
  $scope.quantity = 1;
  $scope.increment = function () {
    $scope.quantity += 1;
  };
  $scope.decrement = function () {
    if ($scope.quantity > 1) {
      $scope.quantity -= 1;
    }
  };

  $scope.validateQuantity = function () {
    if ($scope.quantity < 1 || isNaN($scope.quantity)) {
      $scope.quantity = 1;
    }
  };
});

app.controller("HomeController", function ($scope) {
  $scope.products = products;
});
