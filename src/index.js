import { render } from 'react-dom';
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import PokeApp from './app/app.js';

render(<PokeApp />, document.getElementById('app'))