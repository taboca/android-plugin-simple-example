cordova create testplugin com.taboca.testplugin TestPlugin
cd testplugin

rm -rf www
cp -r ../www .
cordova platform add android@5.0.0
cordova plugin add ../EXAMPLE_tabocaechoplugin/TabocaEcho
cordova build
