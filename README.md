## Requirements

Make sure you have your cordova environment working and your platform settings fine. In my case I have npm cordova infrastructure and the platform is Android. 

## Creating a plugin 

First install plugman

* Reference https://cordova.apache.org/docs/en/latest/plugin_ref/plugman.html

```
npm install -g plugman
```

### Create your plugin project

Enter your project main project directory, and issue plugman to create your plugin. Beware that some examples may use plugin_id with dashes "-" and you may fall intro trouble if plugman creates a Java  package name with dashes in it. This is why I am using underscore.


```
plugman create --name TabocaEcho --plugin_id com_taboca_plugins_echo --plugin_version 0.0.1 --path tabocaechoplugin
```

enter your plugin directory and add the platform

```
plugman platform add --platform_name android
```

This should modify the plugin.xml.

Notice that this project has a GENERATED_com_taboca_plugins_echo directory which is an example of what plugman will create, plus the android platform stuff that you also have added. 


## Making an app to test your plugin 

* Check the 10_make_cordova_app.sh 

## Learn with my examples

You can also switch branches to check how the EXAMPLE_ source evolves: 

* interaction_1 branch shows a Toast display element when the JS call is made
