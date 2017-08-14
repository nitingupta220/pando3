(function(angular) {

    var app = angular.module("json", []);

    app.controller("json_work", ["$scope", "$http", function($scope, $http) {
        //    here $http get a information from "logs_with_gates.json"     

        $http.get("logs_with_gates.json")
            //        then we will call then mathod to call function in which response argument gives all data contain in records as an Array 
            .then(function(response) {

                $scope.mydata = response.data;


            });
        $scope.list1 = [1, 2, 3, 4];
    }]);
})(window.angular)