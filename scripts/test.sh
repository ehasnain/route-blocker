#!/bin/sh

yarn &&
yarn lint &&
mocha -r ts-node/register "./test/**/*test.ts" $@
