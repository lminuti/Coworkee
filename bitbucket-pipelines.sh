pushd ~/download
ls -l

# Download and extract SDK

echo $SDK_URL

if [ ! -e extjs-7.0.0-small.zip ]
  then
	echo "Downloading SDK..."
    wget $SDK_URL 2>&1 | tail
fi

if [ ! -e ext-7.0.0 ]
  then
	echo "Extracting SDK..."
    unzip extjs-7.0.0-small.zip | tail
fi
	
ls -l

# Download and install sencha command
if [ ! -e SenchaCmd-7.0.0.40-linux-amd64.sh.zip ]
  then
	echo "Downloading sencha command..."
    wget http://cdn.sencha.com/cmd/7.0.0.40/no-jre/SenchaCmd-7.0.0.40-linux-amd64.sh.zip 2>&1 | tail
fi

if [ ! -e SenchaCmd-7.0.0.40-linux-amd64.sh ]
  then
	echo "Extracting sencha command..."
    unzip SenchaCmd-7.0.0.40-linux-amd64.sh.zip
fi

echo "Installing sencha command..."
./SenchaCmd-7.0.0.40-linux-amd64.sh -q

# Go to the workspace dir
popd
cd client
# Prepare workspace
echo "Preparing workspace..."
~/bin/Sencha/Cmd/7.0.0.40/sencha app install ~/download/ext-7.0.0
# Compile production release
echo "Compiling app..."
~/bin/Sencha/Cmd/7.0.0.40/sencha app build production

