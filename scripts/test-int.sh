#!/bin/sh

mocha -r ts-node/register "./src/**/test.ts" $@ &&
    echo "All integration tests passed 💚"
