app.factory("productsFactory", function ($http) {

    var factory = {};

    // read all products
    factory.readProducts = function () {
        return $http({
            method: 'GET',
            url: 'http://maya-api.azurewebsites.net/products'
        });
    };

    // create product
    factory.PayNow = function (Id, Value , Amount) {
        return $http({
            method: 'POST',
            data:{  
                "Id":"2",
                "SellerId":"seller-1",
                "CustomerId":"customer-2",
                "products":[  
                   {  
                      "ProductId": Id,
                      "ProductValue": Value,
                      "ProductAmount": Amount
                   }
                ]
             },
            url: 'http://maya-api.azurewebsites.net/orders'
        });
    };



    return factory;
});