app.controller('homeController', function ($scope) {

    $scope.mdlcheckanimation = false;
    $scope.butonMessage = "Message default";
    $scope.message = "Message default";
    $scope.time = 5000;


    $scope.data = { active: false };

    $scope.toggle = function () {
        $scope.data.active = !$scope.data.active;
    };

});
