#!/bin/bash

RESULT=`gcc -o ./sources/prog $1 2>&1 | wc -l`
echo $RESULT

