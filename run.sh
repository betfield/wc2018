#!/bin/bash
echo "Starting WC2018 application"
export ROOT_URL=https://mm.fctwister.ee
meteor --settings settings.sandbox.json &>> /home/betfield/logs/wc2018.log 
