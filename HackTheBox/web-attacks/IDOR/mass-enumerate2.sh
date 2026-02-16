#!/bin/bash

for i in {1..20}; do
  for hash in $(echo -n $i | base64 -w 0); do
      curl -sOJ "http://94.237.48.12:40071/download.php?contract=$hash"
  done
done
