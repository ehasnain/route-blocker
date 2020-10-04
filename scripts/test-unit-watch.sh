#!/bin/sh

DIR="$( cd "$( dirname $0 )" >/dev/null && pwd )"

nodemon --watch "src" --ext "ts,json" --exec "clear && $DIR/test-unit.sh"
