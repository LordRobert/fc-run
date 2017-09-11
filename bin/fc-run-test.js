#!/usr/bin/env node
'use strict';

process.env.INIT_CWD = process.cwd();

var lib= require('../fc-run.js');
lib.run();