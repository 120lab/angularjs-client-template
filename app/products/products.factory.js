app.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: 'http://maya-api.azurewebsites.net/products'
        });
    };

    
     
    // createProduct will be here
     
    return factory;
});