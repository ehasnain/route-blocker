#!/bin/sh

mocha -r ts-node/register "./src/**/**spec.ts" $@ &&
    echo "All unit tests passed 💚"
