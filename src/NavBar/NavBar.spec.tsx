declare var jest, describe, it, expect, test;

/* T_T why? */
import * as React from 'react';
/* Why can't I do `export default NavBar` instead? */
import { NavBar } from './NavBar';

/* Wha? Why do I need to use a require in this case instead? */
import * as renderer from 'react-test-renderer';

test('NavBar renders correctly', () => {
  const tree = renderer.create(
    <NavBar></NavBar>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
