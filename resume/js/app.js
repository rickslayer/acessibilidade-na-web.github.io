var appAbout = angular.module('appResumeAbout', ['ngMaterial', 'ngMessages', 'ngAnimate']);

appAbout.controller("appResumeController",appResumeController);

function appResumeController($scope)
{
	$scope.nome = "Paulo Ricardo";
	$scope.sobrenome = "Rube de Almeida";
	$scope.endereco = "120 · Urias Pithon Barreto Street · Arujá · São Paulo · Brazil · +55 (11) 97508-5586";
	
	
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