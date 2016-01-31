/**
 * Created by lunarca on 1/31/16.
 */

app.config(["$stateProvider", "$urlRouterProvider"], function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider

        .state("login", {
            "url": "/login",

        })
    ;
});