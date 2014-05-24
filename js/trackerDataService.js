/*
    Studio Tracker
     Author: Eric Rogers
 */

// Tracker Data Service Class
angular.module('tracker').service('trackerDataService', function(){

    // Sample Clients
    var clients = [
        {
            name: 'Sean',
            street: '123 Paradise Way',
            city: 'Ciudad de Paz',
            state: 'FL',
            zipCode: '12345'
        },
        {
            name: 'Mary',
            street: '321 Center Lane',
            city: 'Moab',
            state: 'UT',
            zipCode: '54321'
        }
    ];

    // Sample Team Members
    var teamMembers = [{
        name: 'Joseph',
        job: 'Designer'
    },
    {
        name: 'Michael',
        job: 'Developer'
    }
    ];

    // Sample Projects
    var projects = [
        {
            pName: 'Portfolio Site',
            pDescription: "Personal portfolio to demonstrate the client's abilities."
        },
        {
            pName: "E-Commerce Site",
            pDescription: "An e-commerce website that allows the client to sell various items, and allow trade-ins."
        }
    ];

    // Clients Methods ===========>
    this.getClients = function(){
        var str = localStorage.getItem('NameLS');
        clients = JSON.parse(str) || clients;
        return clients;
    };

    this.addClient = function($scope, name, street, city, state, zipCode){
        if (name && street && city && state && zipCode){
            clients.push({name: name, street: street, city: city, state: state, zipCode: zipCode});
            var str = JSON.stringify(clients);
            localStorage.setItem('NameLS', str);

            $scope.name = '';
            $scope.street = '';
            $scope.city = '';
            $scope.state = '';
            $scope.zipCode = '';
        }
    };

    this.deleteClient = function(cName){
        clients.splice(clients.indexOf(cName), 1);
        var str = JSON.stringify(clients);
        localStorage.setItem('NameLS', str);
    };
    // <========== end of Clients Methods

    // Projects Methods =============>
    this.getProjects = function(){
        var str = localStorage.getItem('ProjectLS');
        projects = JSON.parse(str) || projects;
        return projects;
    };

    this.addProject = function($scope, name, description) {
        if (name && description) {
            projects.push({pName: name, pDescription: description });
            var str = JSON.stringify(projects);
            localStorage.setItem('ProjectLS', str);

            $scope.pName = '';
            $scope.pDescription = '';
        }
    };

    this.removeProject = function(pName){
        projects.splice(projects.indexOf(pName), 1);
        var str = JSON.stringify(projects);
        localStorage.setItem('ProjectLS', str);
    };
    // <============= end of Projects Methods

    // Team Members Methods ============>
    this.getTeamMembers = function(){
        var str = localStorage.getItem('TeamLS');
        teamMembers = JSON.parse(str) || teamMembers;
        return teamMembers;
    };

    this.addTeamMember = function($scope, name, job){
        if (name && job) {
            teamMembers.push({name: name, job: job});
            var str = JSON.stringify(teamMembers);
            localStorage.setItem('TeamLS', str);

            $scope.name = '';
            $scope.job = '';

        }
    };

    this.removeTeamMember = function(tName){
        teamMembers.splice(teamMembers.indexOf(tName), 1);
        var str = JSON.stringify(teamMembers);
        localStorage.setItem('TeamLS', str);
    };
    // <========= end of Team Members Methods

});
