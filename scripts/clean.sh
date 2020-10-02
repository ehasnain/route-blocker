#!/bin/sh

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null && pwd)"

FOLDER=$DIR/../$1

if [ $1 ] && [ -d "$FOLDER" ]; then
  rm -rf $FOLDER &&
    echo "\"$1\" successfully deleted 🚽"
else
  echo "Path: \"$FOLDER\" does not exist 🚯"
fi
