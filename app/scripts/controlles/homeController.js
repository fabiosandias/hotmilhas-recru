app.controller('homeController', function ($scope, $q, $timeout) {


    $scope.time = 5000; // Por padrão leva 5 segundos de exibição
    $scope.message = "Message default"; // Mensagem default


    $scope.activeShow = false; // Recebe falso para o elemento ficar escondido
    $scope.loginAlertMessage = true;

    /**
     * Função para verificar no evento click se a variavel activeShow está como falso
     * Configura os segundos de exibição
    */
    $scope.toggle = function () {
        if (!$scope.activeShow)
            $scope.activeShow = true;

        return $timeout(function() {
            $scope.activeShow = false;
        }, $scope.time);
    };

});
