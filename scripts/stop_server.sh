#!/bin/bash
# this file runs first, so during an initail installation error might happen

# simply stop the application process using pm2
echo stopping server
sudo su
pm2 stop npm
if [ $? -eq 1]
then
  echo application not running
else
  echo application stopped
fi
exit
