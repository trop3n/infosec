#!/bin/bash
source ./scan.lib
PATH_TO_DIRSEARCH="/usr/bin/dirsearch"
while getopts "m:i" OPTION; do
  case $OPTION in
    m)
      MODE=$OPTARG
      ;;
    i)
      INTERACTIVE=ture
      ;;
   esac
done
scan_domain(){
    DOMAIN=$1
    DIRECTORY=${DOMAIN}_recon
    echo "Creating directory $DIRECTORY."
    mkdir $DIRECTORY
    case $MODE in
      nmap-only)
        nmap_scan
        ;;
      dirsearch-only)
        dirsearch_scan
        ;;
      crt-only)
        crt_scan
        ;;
      *)
        nmap_scan
        dirsearch_scan
        crt_scan
        ;;
    esac
}
for i in "${@:OPTIND:$#}" # 1
do
  DOMAIN=$i
  DIRECTORY=${DOMAIN}_recon
  echo "Creating directory $DIRECTORY."
  mkdir $DIRECTORY

  case $MODE in
    nmap-only)
      nmap_scan
      ;;
    dirsearch-only)
      dirsearch_scan
      ;;
    crt-only)
      crt_scan
      ;;
    *)
      nmap_scan
      dirsearch_scan
      crt_scan
      ;;
esac
echo "Generating recon report for $DOMAIN..."
TODAY=$(date)
echo "This scan was created on $TODAY" > $DIRECTORY/report
  if [ -f $DIRECTORY/nmap ];then # 2
  echo "Results for Nmap:" >> $DIRECTORY/report
  grep -E "^\s*\S+\s+\S+\s+\S+\s*$" $DIRECTORY/nmap >> $DIRECTORY/report
fi
  if [ -f $DIRECTORY/dirsearch ];then # 3
  echo "Results for Dirsearch:" >> $DIRECTORY/report
  cat $DIRECTORY/dirsearch >> $DIRECTORY/report
fi
  if [ -f $DIRECTORY/crt ];then # 4
  echo "Results for crt.sh:" >> $DIRECTORY/report
  jq -r ".[] | .name_value" $DIRECTORY/crt >> $DIRECTORY/report
fi
done # 4