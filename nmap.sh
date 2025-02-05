#!/bin/bash
nmap $1
/path/to/dirsearch.py -u $1 -e php