homeModule.controller('ProductController', function($scope,$http) {
  $scope.products = [];
  $http.get('../assets/js/product.json').then(function(response) {
    $scope.products = response.data;
  })
});
