var appAbout = angular.module("appResumeAbout", []);

appAbout.controller("appResumeController", function ($scope){
	
	$scope.nome = "Paulo Ricardo";
	$scope.sobrenome = "Rube de Almeida";
	$scope.endereco = "120 · Urias Pithon Barreto Street · Arujá · São Paulo · Brazil · (55) 97508-5586";
	
});