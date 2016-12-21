/// <reference path="../../e2e-tests/typings/angularjs/angular.d.ts" />

'use strict';

angular.module('ValidateString',[])

module ValidateString
{
    interface IValidateStringScope  extends ng.IScope
    {
    }
    
    class ValidateStringDirective implements ng.IDirective
    {
    	static instance() : ng.IDirective {
            return new ValidateStringDirective;
        }

        restrict = 'A';

        link(scope : IValidateStringScope, elements : ng.IAugmentedJQuery, attrs : ng.IAttributes) {

                elements.bind('blur', function() {
                    if((angular.element(elements[0]).val() != "") && (!/^[a-zA-Z]+$/.test(angular.element(elements[0]).val()))) {
                        angular.element(elements[0]).css('border-color','red');
                    }else{
                        angular.element(elements[0]).css('border-color', 'initial')
                    }
                });
        }
    }

    angular.module('ValidateString').directive('validateString', ValidateStringDirective.instance);
}