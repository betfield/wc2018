#!/bin/bash
# Define a timestamp function
echo "Creating MongoDB dump for WC2018 $(date)"
mongodump --port 3001 --out "/home/betfield/backup/wc2018/$(date +%Y%m%d_%H%M%S)"
exit
