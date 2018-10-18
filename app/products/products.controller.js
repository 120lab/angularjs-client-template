app.controller('productsController', function ($scope, $mdDialog, $mdToast, productsFactory) {

    // show toast message
    $scope.showToast = function (message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .hideDelay(3000)
                .position("top right")
        );
    }

    // read products
    $scope.readProducts = function () {

        // use products factory
        productsFactory.readProducts().then(function successCallback(response) {
            console.log(response.data);
            $scope.products = response.data;
        }, function errorCallback(response) {
            $scope.showToast("Unable to read record.");
        });

    }

    $scope.showConfirm = function(Description, Id, Value , Amount) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Order confirmation')
              .htmlContent("Product Type : " + Description + 
                           "</br>Identify : " + Id + 
                           "</br>Price : " + Value + 
                           "</br>Amount : " + Amount +
                           "</br>Total pay: " + Number(Value) * Number(Amount))
              .ariaLabel('Lucky day')
              .targetEvent()
              .ok('Pay Now')
              .cancel('Remove order');
    
        $mdDialog.show(confirm).then(function() {
            $scope.status = 'Order Confirmed.';

            productsFactory.PayNow(Id, Value , Amount).then(function successCallback(response) {
                console.log(response.data);
                $scope.products = response.data;
            }, function errorCallback(response) {
                $scope.showToast("Unable to read record.");
            });
            
        }, function() {
            $scope.status = 'Order canceled.';
        });

        $scope.readProducts();
      };


});