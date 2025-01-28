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
function setActiveLink() {
  var navLinks = document.querySelectorAll("#nav-bar a");
  navLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  var currentHash = window.location.hash;
  console.log("Current Hash:", currentHash);
  navLinks.forEach(function (link) {
    var linkHref = link.getAttribute("href");
    if (currentHash === linkHref || currentHash.startsWith(linkHref + "/")) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("load", setActiveLink);
window.addEventListener("hashchange", setActiveLink);

function setActiveCategory() {
  var categoryLinks = document.querySelectorAll("#ul-bar a");
  categoryLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  var currentHash = window.location.hash;
  categoryLinks.forEach(function (link) {
    var linkHref = link.getAttribute("href");

    if (currentHash === linkHref) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("load", setActiveCategory);
window.addEventListener("hashchange", setActiveCategory);

app.controller("AboutController", function ($scope) {});
app.controller("ProductController", function ($scope, $location, $document) {
  $scope.products = products;
  $scope.itemsPerPage = 12;
  $scope.currentPage = 1;
  $scope.totalPages = Math.ceil($scope.products.length / $scope.itemsPerPage); // Total number of pages
  $scope.isHovering = false;

  $scope.updatePaginatedProducts = function () {
    const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
    const endIndex = startIndex + $scope.itemsPerPage;
    $scope.paginatedProducts = $scope.products.slice(startIndex, endIndex);
  };
  $scope.goToDetailPage = function (productId) {
    $location.path("/product/id/" + productId);
  };

  $document.on("click", function (event) {
    const target = event.target;
    const hoverButtons = document.querySelectorAll(".hover-overlay button");
    const isClickInsideButton = Array.from(hoverButtons).some((button) =>
      button.contains(target)
    );
    if (!isClickInsideButton) {
      const productId = target
        .closest(".product-cart")
        ?.querySelector("a")
        ?.getAttribute("href")
        ?.split("/")
        .pop();
      if (productId) {
        $scope.goToDetailPage(productId);
      }
    }
  });

  $scope.goToPage = function (page) {
    if (page > 0 && page <= $scope.totalPages) {
      $scope.currentPage = page;
      $scope.updatePaginatedProducts();
    }
  };

  $scope.updatePaginatedProducts();
});

app.controller("NewController", function ($scope) {
  $scope.products = products;
  $scope.filteredProducts = $scope.products.filter(function (product) {
    return product.category === "New";
  });
  $scope.itemsPerPage = 12;
  $scope.currentPage = 1;
  $scope.updatePaginatedProducts = function () {
    const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
    const endIndex = startIndex + $scope.itemsPerPage;
    $scope.paginatedProducts = $scope.filteredProducts.slice(
      startIndex,
      endIndex
    );
  };
  $scope.goToPage = function (page) {
    if (page > 0 && page <= $scope.totalPages) {
      $scope.currentPage = page;
      $scope.updatePaginatedProducts();
    }
  };
  $scope.totalPages = Math.ceil(
    $scope.filteredProducts.length / $scope.itemsPerPage
  );
  $scope.updatePaginatedProducts();
});

app.controller("FeaturedController", function ($scope) {
  $scope.products = products;
  $scope.filteredProducts = $scope.products.filter(function (product) {
    return product.category === "Featured";
  });
  $scope.itemsPerPage = 12;
  $scope.currentPage = 1;
  $scope.updatePaginatedProducts = function () {
    const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
    const endIndex = startIndex + $scope.itemsPerPage;
    $scope.paginatedProducts = $scope.filteredProducts.slice(
      startIndex,
      endIndex
    );
  };
  $scope.goToPage = function (page) {
    if (page > 0 && page <= $scope.totalPages) {
      $scope.currentPage = page;
      $scope.updatePaginatedProducts();
    }
  };
  $scope.totalPages = Math.ceil(
    $scope.filteredProducts.length / $scope.itemsPerPage
  );
  $scope.updatePaginatedProducts();
});

app.controller("PromotionController", function ($scope) {
  $scope.products = products;
  $scope.filteredProducts = $scope.products.filter(function (product) {
    return product.category === "Promotion";
  });
  $scope.itemsPerPage = 12;
  $scope.currentPage = 1;
  $scope.updatePaginatedProducts = function () {
    const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
    const endIndex = startIndex + $scope.itemsPerPage;
    $scope.paginatedProducts = $scope.filteredProducts.slice(
      startIndex,
      endIndex
    );
  };
  $scope.goToPage = function (page) {
    if (page > 0 && page <= $scope.totalPages) {
      $scope.currentPage = page;
      $scope.updatePaginatedProducts();
    }
  };
  $scope.totalPages = Math.ceil(
    $scope.filteredProducts.length / $scope.itemsPerPage
  );
  $scope.updatePaginatedProducts();
});
app.controller("DetailProductController", function ($scope, $routeParams) {
  const productId = parseInt($routeParams.productId);
  $scope.products = products;
  $scope.selectedProduct = products.find(function (product) {
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
  $scope.productsNew = products.filter(
    (product) => product.category.trim() === "New"
  );
  $scope.productsFeatured = products.filter(
    (product) => product.category.trim() === "Featured"
  );
  $scope.itemsPerPage = 4;
  $scope.currentPageNew = 1;
  $scope.totalPagesNew = Math.ceil(
    $scope.productsNew.length / $scope.itemsPerPage
  );
  $scope.totalPagesFeatured = Math.ceil(
    $scope.productsFeatured.length / $scope.itemsPerPage
  );
  $scope.currentPageFeatured = 1;
  $scope.totalPagesFeatured = Math.ceil(
    $scope.productsFeatured.length / $scope.itemsPerPage
  );
  $scope.updatePaginatedProductsNew = function () {
    const startIndex = ($scope.currentPageNew - 1) * $scope.itemsPerPage;
    const endIndex = startIndex + $scope.itemsPerPage;
    $scope.paginatedProductsNew = $scope.productsNew.slice(
      startIndex,
      endIndex
    );
  };

  $scope.updatePaginatedProductsFeatured = function () {
    const startIndex = ($scope.currentPageFeatured - 1) * $scope.itemsPerPage;
    const endIndex = startIndex + $scope.itemsPerPage;
    $scope.paginatedProductsFeatured = $scope.productsFeatured.slice(
      startIndex,
      endIndex
    );
  };
  $scope.goToPageNew = function (page) {
    $scope.currentPageNew = page;
    $scope.updatePaginatedProductsNew();
  };

  $scope.goToPageFeatured = function (page) {
    $scope.currentPageFeatured = page;
    $scope.updatePaginatedProductsFeatured();
  };
  $scope.updatePaginatedProductsNew();
  $scope.updatePaginatedProductsFeatured();
});
