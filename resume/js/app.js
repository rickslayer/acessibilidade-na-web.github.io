var appAbout = angular.module('appResumeAbout', ['ngMaterial', 'ngMessages', 'ngAnimate']);

appAbout.controller("appResumeController",appResumeController);

appAbout.controller("appGetJobsController",appGetJobsController);

appAbout.controller("appGetWorkFlow", appGetWorkFlow );

function appResumeController($scope)
{
	$scope.nome = "Paulo Ricardo";
	$scope.sobrenome = "Rube de Almeida";
	$scope.endereco = "Arujá · São Paulo · Brazil · +55 (11) 97508-5586";
	
	
	$scope.hoverIn = function (redesocial, valor){
		this.hoverEdit = true;
		var oBJ = {};
		oBJ[redesocial] = valor;		
		$scope.socials = oBJ;
	};
	
	 $scope.hoverOut = function(){
	        this.hoverEdit = false;
	    };
}

function appGetJobsController($scope , $http)
{
	var ajax = $http({
				method: "GET",
				url: "https://rickslayer.github.io/resume/datasrcjson/jobs.json"
	});
	
	ajax.then(function sucesso(response){
		
		var retorno = response.data;
		
		$scope.responseData = retorno;
		
	});
}

function appGetWorkFlow($scope, $http)
{
	var ajax = $http({
		 method: "GET",
		 url: "https://rickslayer.github.io/resume/datasrcjson/itensWorkflow.json"
	});
	
		ajax.then(function sucesso(response){
			
			var retorno = response.data;
			
			$scope.responseData = retorno;
		});

}



