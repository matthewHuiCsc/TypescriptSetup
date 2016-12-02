import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { NavBar } from './NavBar/NavBar';
import { Greeter } from './greeter';

ReactDOM.render(
  <div>
    <NavBar />
    <Greeter />
  </div>
, document.body.querySelector('#app'));
