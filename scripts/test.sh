#!/bin/sh

yarn &&
yarn lint &&
mocha -r ts-node/register "./tests/**/*test.ts" $@
