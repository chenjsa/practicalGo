/**
 * Created by chenjunsheng on 2017/2/4.
 */
'use strict';

import React from 'react';
import { render } from 'react-dom'

const app = document.createElement('div');
document.body.appendChild(app);

render(
    <h1>Hello, React!</h1>,
    app
);
