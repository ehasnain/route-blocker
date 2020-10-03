#!/bin/sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

nodemon --watch "example/**" --ext "ts,json" --exec "$DIR/start-example.sh"
