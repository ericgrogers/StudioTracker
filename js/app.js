/*
    Studio Tracker
    Author: Eric Rogers
 */

// Tracker Module
angular.module('tracker',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/view1/:clients', {
            templateUrl : 'View1.html',
            controller : 'View1Ctrl'
        }).when('/view2/:projects', {
            templateUrl : 'View2.html',
            controller : 'View2Ctrl'
        }).when('/view3/:team', {
            templateUrl : 'View3.html',
            controller : 'View3Ctrl'
        }).otherwise({
            redirectTo : '/view1/Clients'
        })

    })

    // Main Controller
    .controller('MainCtrl', function($scope, $routeParams,trackerDataService){
        //====== Clients ===========>
        $scope.name;
        $scope.street;
        $scope.city;
        $scope.state;
        $scope.zipCode;
    
        //====== Projects =========>
        $scope.pName;
        $scope.pDescription;
    
        //====== Team Members =====>
        $scope.name;
        $scope.job;
    
        $scope.date = new Date();

        // grab the current view route params
        $scope.page;
        $routeParams.clients ? $scope.page = $routeParams.clients : $routeParams.projects ? $scope.page = $routeParams.projects : $scope.page = $routeParams.team
        

        // List Clients
        $scope.clients = trackerDataService.getClients();
        
        // Add Client
        $scope.addClient = function(){
            trackerDataService.addClient($scope, $scope.name,  $scope.street, $scope.city, $scope.state, $scope.zipCode);
        };

        // Delete Client
        $scope.deleteClient = function(cName){
            trackerDataService.deleteClient(cName);
            $scope.clientCount = $scope.clients.length;
        };
    
        
    })

    // View 2 Controller
    .controller('View2Ctrl', function($scope, $routeParams,trackerDataService){
        $scope.pName;
        $scope.pDescription;
        

        // grab the current view route params
        $scope.page = $routeParams.projects;

        // List Projects
        $scope.projects = trackerDataService.getProjects();

        // Add Project
        $scope.addProject = function(){
            trackerDataService.addProject($scope, $scope.pName, $scope.pDescription);
        };

        // Delete Project
        $scope.deleteProject = function(pName){
            trackerDataService.removeProject(pName);
        }
    })

    // View 3 Controller
    .controller('View3Ctrl', function($scope, $routeParams, trackerDataService){
        $scope.name;
        $scope.job;
        $scope.date = new Date();

        // grab the current view route params
        $scope.page = $routeParams.team;

        // List Team Members
        $scope.teamMembers = trackerDataService.getTeamMembers();

        // Add Team Member
        $scope.addTeamMember = function(){
            trackerDataService.addTeamMember($scope, $scope.name, $scope.job);
        };

        // Delete Team Member
        $scope.deleteTeamMember = function(tName){
            trackerDataService.removeTeamMember(tName);
        };
    })

;

