#!/bin/sh

yarn &&
yarn lint &&
mocha -r ts-node/register "./src/**/*test.ts" $@
