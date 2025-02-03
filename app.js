const app = angular.module("shoeStoreApp", ["ngRoute"]);
const gioHang = [];
app.config(function ($routeProvider) {
  $routeProvider
    .when("/login", {
      templateUrl: "./views/login.html",
      controller: "LoginController",
    })
    .when("/register", {
      templateUrl: "./views/register.html",
      controller: "RegisterController",
    })
    .when("/", {
      templateUrl: "./views/home.html",
      controller: "HomeController",
    })
    .when("/about", {
      templateUrl: "./views/about.html",
      controller: "AboutController",
    })
    .when("/checkOut", {
      templateUrl: "./views/checkout.html",
      controller: "CheckOutController",
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
    .when("/quickViewModal", {
      templateUrl: "./views/quickViewModal",
      controller: "QuickViewModalController",
    })
    .when("/news", {
      templateUrl: "./views/news.html",
      controller: "NewsController",
    })
    .when("/contact", {
      templateUrl: "./views/contact.html",
      controller: "ContactController",
    })
    .when("/news/id/:newsId", {
      templateUrl: "./views/news/detailNews.html",
      controller: "DetailNewsController",
    })
    .when("/payment", {
      templateUrl: "./views/payment.html",
      controller: "PaymentController",
    })

    .otherwise({
      redirectTo: "/",
    });
});
function initMap() {
  const location = { lat: 21.176378, lng: 105.841977 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
window.onload = initMap;
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

// function setActiveCategory() {
//   var categoryLinks = document.querySelectorAll("#ul-bar a");
//   categoryLinks.forEach(function (link) {
//     link.classList.remove("active");
//   });
//   var currentHash = window.location.hash;
//   categoryLinks.forEach(function (link) {
//     var linkHref = link.getAttribute("href");

//     if (currentHash === linkHref) {
//       link.classList.add("active");
//     }
//   });
// }
// window.addEventListener("load", setActiveCategory);
// window.addEventListener("hashchange", setActiveCategory);
// var ModalDemoCtrl = function ($scope, $modal, $log) {
//   $scope.items = ["item1", "item2", "item3"];

//   $scope.open = function () {
//     var modalInstance = $modal.open({
//       templateUrl: "./views/myModalContent.html",
//       controller: ModalInstanceCtrl,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         },
//       },
//     });

//     modalInstance.result.then(
//       function (selectedItem) {
//         $scope.selected = selectedItem;
//       },
//       function () {
//         $log.info("Modal dismissed at: " + new Date());
//       }
//     );
//   };
// };

// var ModalInstanceCtrl = function ($scope, $modalInstance, items) {
//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0],
//   };

//   $scope.ok = function () {
//     $modalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $modalInstance.dismiss("cancel");
//   };
// };

app.controller("CheckOutController", function ($scope) {
  $scope.products = gioHang;
  $scope.deleteCart = function (product) {
    const index = gioHang.indexOf(product);
    if (index > -1) {
      gioHang.splice(index, 1);
      $scope.products = gioHang;
    }
  };

  $scope.updateQuantity = function (product, newQuantity) {
    if (newQuantity < 1 || isNaN(newQuantity)) {
      newQuantity = 1;
    }
    product.quantity = newQuantity;
    console.log("Updated Cart: ", gioHang);
  };

  $scope.getTotalPrice = function () {
    let totalPrice = 0;
    $scope.products.forEach(function (product) {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };
});

app.controller("AboutController", function ($scope, $location) {});
app.controller("ProductController", function ($scope, $location) {
  $scope.products = products;
  $scope.itemsPerPage = 9;
  $scope.currentPage = 1;
  $scope.totalPages = Math.ceil($scope.products.length / $scope.itemsPerPage);
  $scope.isModalVisible = false;

  $scope.isActive = function (path) {
    return $location.path() === path;
  };
  $scope.updatePaginatedProducts = function () {
    const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
    const endIndex = startIndex + $scope.itemsPerPage;
    $scope.paginatedProducts = $scope.products.slice(startIndex, endIndex);
  };

  $scope.goToDetailPage = function (productId) {
    $location.path("/product/id/" + productId);
  };

  $scope.showQuickView = function (e, product) {
    $scope.selectedProduct = product;
    $scope.isModalVisible = true;
    e.stopPropagation();
    console.log("Modal is now visible:", $scope.isModalVisible);
  };
  $scope.isModalVisible = false;

  $scope.showSimpleModal = function () {
    $scope.isModalVisible = true;
  };

  $scope.closeModal = function () {
    $scope.isModalVisible = false;
  };
  $scope.closeModal = function () {
    $scope.isModalVisible = false;
    console.log("Modal is now hidden:", $scope.isModalVisible);
  };
  $scope.goToPage = function (page) {
    if (page > 0 && page <= $scope.totalPages) {
      $scope.currentPage = page;
      $scope.updatePaginatedProducts();
    }
  };

  $scope.goToDetailPage = function (productId) {
    $location.path("/product/id/" + productId);
  };
  $scope.handleGetSortedList = (SORT_TYPE) => {
    switch (SORT_TYPE) {
      case 1:
        return products.sort((a, b) => a.title - b.title);
      case 2:
        return products.sort((a, b) => b.title - a.title);
      case 3:
        return products.sort((a, b) => a.price - b.price);
      case 4:
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  $scope.updatePaginatedProducts();
});

app.controller("NewController", function ($scope, $location) {
  $scope.products = products;
  $scope.filteredProducts = $scope.products.filter(function (product) {
    return product.category === "New";
  });
  $scope.isActive = function (path) {
    return $location.path() === path;
  };
  $scope.itemsPerPage = 6;
  $scope.currentPage = 1;
  $scope.totalPages = Math.ceil($scope.products.length / $scope.itemsPerPage);
  $scope.isModalVisible = false;

  $scope.updatePaginatedProducts = function () {
    const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
    const endIndex = startIndex + $scope.itemsPerPage;
    $scope.paginatedProducts = $scope.products.slice(startIndex, endIndex);
  };
  $scope.goToPage = function (page) {
    if (page > 0 && page <= $scope.totalPages) {
      $scope.currentPage = page;
      $scope.updatePaginatedProducts();
    }
  };
  $scope.goToDetailPage = function (productId) {
    $location.path("/product/id/" + productId);
  };
  $scope.updatePaginatedProducts();
});
app.controller(
  "QuickViewModalController",
  function ($scope, $uibModalInstance, product) {
    $scope.product = product;
    $scope.closeModal = function () {
      $uibModalInstance.dismiss("cancel");
    };
  }
);

app.controller("FeaturedController", function ($scope, $location) {
  $scope.products = products;
  $scope.filteredProducts = $scope.products.filter(function (product) {
    return product.category === "Featured";
  });
  $scope.isActive = function (path) {
    return $location.path() === path;
  };
  $scope.itemsPerPage = 6;
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
  $scope.goToDetailPage = function (productId) {
    $location.path("/product/id/" + productId);
  };
  $scope.totalPages = Math.ceil(
    $scope.filteredProducts.length / $scope.itemsPerPage
  );
  $scope.updatePaginatedProducts();
});

app.controller("PromotionController", function ($scope, $location) {
  $scope.products = products;
  $scope.filteredProducts = $scope.products.filter(function (product) {
    return product.category === "Promotion";
  });
  $scope.isActive = function (path) {
    return $location.path() === path;
  };
  $scope.itemsPerPage = 16;
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
  $scope.goToDetailPage = function (productId) {
    $location.path("/product/id/" + productId);
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

  $scope.relatedProducts = products.filter(function (product) {
    return (
      product.category === $scope.selectedProduct.category &&
      product.id !== productId
    );
  });

  $scope.addToCart = function () {
    let cartProduct = gioHang.find(
      (item) => item.id === $scope.selectedProduct.id
    );
    if (cartProduct) {
      cartProduct.quantity += $scope.quantity;
    } else {
      $scope.selectedProduct.quantity = $scope.quantity;
      gioHang.push($scope.selectedProduct);
    }
    console.log("gioHang after adding:", gioHang); // Check if items are being added
  };

  $scope.itemsPerPageRelated = 4;
  $scope.currentPageRelated = 1;
  $scope.totalPagesRelated = Math.ceil(
    $scope.relatedProducts.length / $scope.itemsPerPageRelated
  );

  $scope.updatePaginatedRelatedProducts = function () {
    const startIndex =
      ($scope.currentPageRelated - 1) * $scope.itemsPerPageRelated;
    const endIndex = startIndex + $scope.itemsPerPageRelated;
    $scope.paginatedRelatedProducts = $scope.relatedProducts.slice(
      startIndex,
      endIndex
    );
  };

  $scope.goToPageRelated = function (page) {
    if (page > 0 && page <= $scope.totalPagesRelated) {
      $scope.currentPageRelated = page;
      $scope.updatePaginatedRelatedProducts();
    }
  };

  $scope.updatePaginatedRelatedProducts();
});
app.controller("HomeController", function ($scope, $location) {
  $scope.isHovering = false;
  $scope.newsData = newsData;

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
  $scope.goToDetailPage = function (productId) {
    // Navigate to the detail product page using the product ID
    $location.path("/product/id/" + productId);
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
app.controller("NewsController", function ($scope, $location) {
  $scope.newsData = newsData;

  // Điều hướng khi click vào tin tức
  $scope.goToDetailPage = function (newsId) {
    $location.path("/news/id/" + newsId);
  };

  $scope.isActive = function (path) {
    return $location.path() === path;
  };
});
app.controller(
  "DetailNewsController",
  function ($scope, $routeParams, $location) {
    const newsId = parseInt($routeParams.newsId);
    $scope.newsData = newsData;
    $scope.selectedNews = $scope.newsData.find((news) => news.id === newsId);
    $scope.relatedNews = $scope.newsData
      .filter((news) => news.id !== newsId)
      .sort((a, b) => new Date(b.time) - new Date(a.time));
    $scope.goToDetailPage = function (id) {
      $location.path(`/news/id/${id}`);
    };
  }
);
