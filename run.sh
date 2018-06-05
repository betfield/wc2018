#!/bin/bash
echo "Starting WC2018 application"
meteor --settings settings.production.json &>> /home/betfield/logs/wc2018.log 
