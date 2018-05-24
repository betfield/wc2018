#!/bin/bash
echo "Starting WC2018 application"
meteor --settings settings.sandbox.json &>> /home/betfield/logs/wc2018.log 
