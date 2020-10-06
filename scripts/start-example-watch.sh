#!/bin/sh

DIR="$( cd "$( dirname $0 )" >/dev/null && pwd )"

nodemon --watch "example/**" --ext "ts,json" --exec "clear && $DIR/start-example.sh"
