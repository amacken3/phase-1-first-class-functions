function receivesAFunction (value) {
    value();
}
function returnsANamedFunction () {
    return function value () {}
}
function returnsAnAnonymousFunction () {
    return function (){}
}