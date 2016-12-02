"use strict";
/* T_T why? */
var React = require("react");
/* Why can't I do `export default NavBar` instead? */
var index_1 = require("./index");
/* Wha? Why do I need to use a require in this case instead? */
var renderer = require('react-test-renderer');
test('NavBar renders correctly', function () {
    var tree = renderer.create(React.createElement(index_1.NavBar, null)).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=NavBar.spec.js.map