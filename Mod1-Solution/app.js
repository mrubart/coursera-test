(function (){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',  LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.placeholderMsg = "list comma separated dishes you usually have for lunch";
    $scope.MsgFontColor = "black";
    $scope.boxColor = "black";
    $scope.btnCheck = function(){
      if($scope.lunchList ){
        if($scope.lunchList.trim().length > 0){
          var lunchList = $scope.lunchList;
          var lunchListArray = lunchList.split(',');
          var itemCount = 0;
          for(var i = 0; i < lunchListArray.length; i++){
            if(lunchListArray[i].trim().length > 0){
              itemCount++;
            }
          }
          if(itemCount == 0){
            $scope.userMsg = "Please enter data first"
            $scope.MsgFontColor = "red";
            $scope.boxColor = "red";
          }
          else if(itemCount <= 3){
            $scope.userMsg = "Enjoy!";
            $scope.MsgFontColor = "green";
            $scope.boxColor = "green";
          }else{
            $scope.userMsg = "Too much!";
            $scope.boxColor = "green";
            $scope.MsgFontColor = "green";
          }
        }
        else {
          $scope.userMsg = "Please enter data first"
          $scope.MsgFontColor = "red";
          $scope.boxColor = "red";
        }

      }
      else {
        $scope.userMsg = "Please enter data first";
        $scope.boxColor = "red";
        $scope.MsgFontColor = "red";
      }
    };
  }
})();
