app.controller('MainController', ['$scope', function ($scope) {
    $scope.name = 'Airik J Leon';
    $scope.title = 'Software Engineer'; 
    $scope.apps = [
        {
            skillname: 'C#',
            class: 'Csharp-skills'
        },
        {
            skillname: 'CPP',
            class: 'CPP-skills'
        },
        {
            skillname: 'Java',
            class: 'java-skills',
        },
        {
            skillname: 'JavaScript', 
            class: 'JS-skills'
        },
        {
            skillname: 'Visual Basic', 
            class: 'VB-skills'
        },
        {
            skillname: 'Common LISP',
            class: 'CL-skills'
        }, 
        {
            skillname: 'SQL Server', 
            class: 'sql-skills'
        },
        {
            skillname: 'NoSQL', 
            class: 'mongo-skills'
        },
        {
            skillname: 'WindowsForms', 
            class: 'winForms'
        },
        {
            skillname: 'Web Forms',
            class: 'webForms'
        }, 
        {
            skillname: '.Net MVC', 
            class: 'netMVC'
        }, 
        {
            skillname: 'Web API',
            class: 'webAPI'
        }, 
        {
            skillname: 'AngularJS', 
            class: 'angular'
        },
        {
            skillname: 'Windows', 
            class: 'windowsOS'
        },
        {
            skillname: 'Linux', 
            class: 'LinuxOS'
        }
    ]
}]); 