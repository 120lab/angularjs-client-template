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
    factory.CreateOrder = function (Id, Value, Amount) {
        return $http({
            method: 'POST',
            data: {
                "Id": "2",
                "SellerId": "seller-1",
                "CustomerId": "customer-2",
                "products": [
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

    // create product
    factory.PayNow = function (Total) {

        console.log("money pay start")

        return $http({
            method: 'POST',
            data: {
                "Balance": "",
                "GasPrice": "",
                "TransactionCount": "",
                "Value": Total
            },
            url: 'http://maya-api.azurewebsites.net/ethers'
        });

        console.log("money pay end")
    };

    return factory;
});