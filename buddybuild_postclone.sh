#!/usr/bin/env bash

CONFIG_FILE="$BUDDYBUILD_WORKSPACE/src/Common/Config.js"
echo Creating configuration file
touch $CONFIG_FILE
tee $CONFIG_FILE > /dev/null <<EOF
let Config = {
  VERSION: '$BUDDYBUILD_BUILD_NUMBER',
  BRANCH: '$BUDDYBUILD_BRANCH',
  API_PREFIX: 'https://app.xp2017.org/api/'
};

export default Config;
EOF
