/**
 * Created by lunarca on 1/31/16.
 */

app.config(
    ["$stateProvider", "$urlRouterProvider", "$httpProvider"],
    function($stateProvider, $urlRouterProvider, $httpProvider) {


        $urlRouterProvider.otherwise("/login");

        $stateProvider

            .state("login", {
                "url": "/login",

            })
        ;

        $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
        $httpProvider.defaults.xsrfCookieName = "_xsrf";
});