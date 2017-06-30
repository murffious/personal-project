angular.module('toyota').directive("configureMotor", function () {

return {

    templateUrl: "./app/directives/configuration/configuremotor.html",
    scope: {},
    controller: ($scope, buildTacomaSvc) => {

          buildTacomaSvc.trdconfiguration().then((res) => {
            //  console.log(res);
             $scope.trdconfiguration = res.data
            })


           $scope.selectedIndex = 0;
            $scope.itemClicked = ($index) => {
                console.log($index);
                $scope.selectedIndex = $index;
            } 

            // These methods are for builidng a cart or summary page  
            // $scope.summmary = {}
            $scope.addToSummary = (product) => {
                console.log(product)
                //     console.log(`Going to service with ${product}`)
                buildTacomaSvc.addToSummary(product).then(() => {
                    // Get the latest cart from the server. It has been updated.
                    // buildTacomaSvc.getSummary().then((res) => {
                    //     $scope.summary = res.data;
                    // })

                })
            }

            // buildTacomaSvc.getSummary().then((res) => {
            //     console.log(res);
            //     $scope.summary = res.data;
            // })
        }
}




})