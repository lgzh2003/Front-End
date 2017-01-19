/**
 * Created by max on 11/14/16.
 */
var app = angular.module("myApp",[]);
app.controller("cartController",function ($scope) {
    $scope.cart = [
        {
            id: 1000,
            product: "iphone 6s",
            quantity: 2,
            price_per: 4300
        },
        {
            id: 1001,
            product: "iphone 7",
            quantity: 5,
            price_per: 6300
        },
        {
            id: 1002,
            product: "Max",
            quantity: 1,
            price_per: 16300
        },
        {
            id: 1003,
            product: "ipad",
            quantity: 21,
            price_per: 5100
        }
    ];
    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += item.price_per * parseInt(item.quantity);
        });
        return total;
    };

    $scope.totalQuantity = function () {
        var total = 0;
        angular.forEach($scope.cart,function (item) {
            total += parseInt(item.quantity);
        });
        return total;
    };

    $scope.remove = function(id){
        var index = 0;
        angular.forEach($scope.cart,function (item,key) {
            if(item.id === id){
                index = key;
            }
        });
        $scope.cart.splice(index,1);// splice(start,step,"something instead")
    };

    $scope.removeAll = function () {
        $scope.cart.splice(0,$scope.cart.length);// delete from 0 to all.
    };

    $scope.minusByOne = function (id) {
        angular.forEach($scope.cart,function(item){
            if(id===item.id){
                if(item.quantity!=1)
                    -- item.quantity;
                else{
                    if (confirm("Are U sure to remove this item from the shopping cart?")) {
                        $scope.remove(id);
                    }
                }
            }
        });
    };

    $scope.plusByOne = function (id) {
        angular.forEach($scope.cart,function(item){
            if(id===item.id){
                ++item.quantity;
            }
        });
    };

    $scope.$watch('cart',function(newValue,oldValue){
        angular.forEach(newValue,function (item,key) {
            if(!(item.quantity>=1) && item.quantity!=""){
                if(confirm("Wrong Number, please input number >= 1")){
                    item.quantity = oldValue[key].quantity;
                }
            }
            else if(item.quantity % 1 !=0){
                if(confirm("Wrong Number, please input number >= 1")){
                    item.quantity = item.quantity - item.quantity%1;
                }
            }
        });

    },true);
});

