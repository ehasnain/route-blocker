#!/bin/sh

DIR="$( cd "$( dirname $0 )" >/dev/null && pwd )"

nodemon --watch "." --ext "ts,json" --exec "clear && yarn test"
