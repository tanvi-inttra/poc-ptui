/// <reference path="../../e2e-tests/typings/angularjs/angular.d.ts" />
'use strict';
angular.module('ValidateString', []);
var ValidateString;
(function (ValidateString) {
    var ValidateStringDirective = (function () {
        function ValidateStringDirective() {
            this.restrict = 'A';
        }
        ValidateStringDirective.instance = function () {
            return new ValidateStringDirective;
        };
        ValidateStringDirective.prototype.link = function (scope, elements, attrs) {
            elements.bind('blur', function () {
                if ((angular.element(elements[0]).val() != "") && (!/^[a-zA-Z]+$/.test(angular.element(elements[0]).val()))) {
                    angular.element(elements[0]).css('border-color', 'red');
                }
                else {
                    angular.element(elements[0]).css('border-color', 'initial');
                }
            });
        };
        return ValidateStringDirective;
    }());
    angular.module('ValidateString').directive('validateString', ValidateStringDirective.instance);
})(ValidateString || (ValidateString = {}));
