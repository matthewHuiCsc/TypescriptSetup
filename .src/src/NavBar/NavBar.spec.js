"use strict";
var React = require("react");
var index_1 = require("./index");
var renderer = require('react-test-renderer');
test('NavBar renders correctly', function () {
    var tree = renderer.create(React.createElement(index_1.NavBar, null)).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=NavBar.spec.js.map