app.directive('appInfo', function ()
{
    return {
        restrict: 'E', 
        scope: {
            info: '='
        }, 
        templateUrl: 
        'Scripts/Front/Directives/SkillsInfo.html'
    }
})