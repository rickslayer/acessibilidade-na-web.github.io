var appAbout = angular.module('appResumeAbout', ['ngMaterial', 'ngMessages']);

appAbout.controller("appResumeController",appResumeController);

function appResumeController($scope)
{
	$scope.nome = "Paulo Ricardo";
	$scope.sobrenome = "Rube de Almeida";
	$scope.endereco = "120 · Urias Pithon Barreto Street · Arujá · São Paulo · Brazil · (55) 97508-5586";
	$scope.demo = {
            showTooltip : false,
            tooltipDirection : ''
         };
	

}