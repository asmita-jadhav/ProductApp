homeModule.controller('ProductDetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('../assets/js/product.json').then(function(response) {
    $scope.products = response.data;
    $scope.whichItem = $routeParams.ID;

    if ($routeParams.ID > 0) {
      $scope.prevItem = Number($routeParams.ID) - 1;
    } else {
      $scope.prevItem = $scope.products.length - 1;
    }

    if ($routeParams.ID < $scope.products.length - 1) {
      $scope.nextItem = Number($routeParams.ID) + 1;
    } else {
      $scope.nextItem = 0;
    }
  });

}]);
