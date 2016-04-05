homeModule.controller('ProductController', function($scope, $http) {

  $scope.products = [];
  $http.get('../assets/js/product.json').then(function(response) {
    $scope.products = response.data;
  });
  $scope.$on('onRepeatLast', function(scope, element, attributes) {
    angular.element(element).readmore(attributes);    
  });
});


homeModule.directive('readMore', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      if (scope) setTimeout(function() {
        scope.$emit('onRepeatLast', element, attributes);
      }, 1);
    }
  };
}]);
