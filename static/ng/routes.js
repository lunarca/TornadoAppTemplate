/**
 * Created by lunarca on 1/31/16.
 */

app.config(
    ["$stateProvider", "$urlRouterProvider", "$httpProvider", "$locationProvider",
    function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise("/login");

        $stateProvider

            .state("login", {
                url: "/login",
                templateUrl: "/static/ng/templates/login.html"
            })
        ;

        $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
        $httpProvider.defaults.xsrfCookieName = "_xsrf";
    }
]);