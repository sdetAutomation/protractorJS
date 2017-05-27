```
#             .___      __     _____          __                         __  .__
#    ______ __| _/_____/  |_  /  _  \  __ ___/  |_  ____   _____ _____ _/  |_|__| ____   ____
#   /  ___// __ |/ __ \   __\/  /_\  \|  |  \   __\/  _ \ /     \\__  \\   __\  |/  _ \ /    \
#   \___ \/ /_/ \  ___/|  | /    |    \  |  /|  | (  <_> )  Y Y  \/ __ \|  | |  (  <_> )   |  \
#  /____  >____ |\___  >__| \____|__  /____/ |__|  \____/|__|_|  (____  /__| |__|\____/|___|  /
#       \/     \/    \/             \/                         \/     \/                    \/
```

# protractorJS
Startup Project for testing Angular UI using Protractor


Introduction
------------
This project is made for anyone who is looking for a starting point for writing functional tests using Protractor and JavaScript.


Project Packages
-----
* autLayer:
Contains class files for each web page being tested.  Page element definitions / mappings, and functions for interacting with page elements.

* testHelper:
- expectHelper: Contains helper for using expect function.


Project start-up
-----
These are the steps to set-up this project.

    - install NodeJS
    - install npm
    - npm install -g protractor
    - webdriver-manager update


Page Object Model
-----
Page object model is used in this framework.  Each web page will have its own javaScript class and within each class contains page element mappings and functions / methods used to interact /verify a specific web page under test.


Test web page
-----
    https://angularjs.org


Executing Test
------------
From command line, execute 'protractor test-config.js'.


Test Run Configuration
------------
This project is configured to use Chrome, and is configured to run locally via 'directConnect' settings.


Questions / Contact / Contribute
------------
Feel free to fork this repo, add to it, and create a pull request if you like to contribute.

If you have any questions, you can contact me via email: `sdet.testautomation@gmail.com`