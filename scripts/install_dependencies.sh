#!/bin/bash

# update yum just in case
#yum update -y
# get node into yum
#curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
# install node and npm in one line
#yum install -y nodejs
# install pm2 to restart node app
#npm i -g pm2@2.4.3
echo installing dependencies
sudo apt-get -y install nodejs
sudo apt-get -y install npm

echo checking for nodejs symlink
file="/usr/bin/node"
if [ -f $file ] && [ ! -L $file ] ; then
  echo "$file exists and is not a symlink"
  sudo ln -s /usr/bin/nodejs
else
  echo "$file exists and is already a symlink"

echo install application with npm
npm install
