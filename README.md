Table of Contents
___________________

- Introduction
- Features
- Requirements
- Usage



Introduction
_____________

FunBundle is an application made to be used on either a web browser or on a android device. The FunBundle app combines both fun updates from the Reddit API as well as news articles from News API.


Features
__________

To describe the features of the FunBundle app I will devide them into the two different pages: FunZone and theNews.

FunZone:
On the FunZone page you'll have the following options: "All", "Funny", "Memes" and "Aww". Where the categories sort of speak for themselves. Changing one of these options changes the category of the posts that you will see on the page.
The next option you have is to click on a desires post. You will then go to another page where you see your chosen post. There you also get the option to copy the link adress to be able to share the post on social media. Below that you see the comments, if you however want to add a comment yourself you can click on the button "Go to Reddit.com" that takes you to the post on the official website where you can then add your own comment.

theNews:
On the theNews page you get the options "Sweden" or "England". These buttons change the origin of the news articles to either swedish news or english news. Also on this page you can click on the specific news posts, however this time the original news article will open in your browser instead of in the app because of API limitations.

On the footer of the app there are a few more options. On the left you have the same options as that are up top in the main menu. To the right of the footer are the links to the API pages as well as to the Font Awesome page that are being used for the menu icons.


Requirements
______________

The requirements for starting this application are:
- Webpack (which includes npm)
- Cordova
- Mithril JS
- Cygwin or another command line interface (the example on Usage is for cygwin however)


Installation
______

First make a folder where you want to have the project in and run the following command on your command line interface (example Cygwin):


                 cordova create . se.dbwebb.funbundle FunBundle

After that you will want to add platforms you can run the app on, add browser with the following command:


                 cordova platform add browser

You can add Android and IOS if you want to just by running the command again and replacing browser with the desired platform.

To add a splashscreen to the app, in case you want to run it on Android or IOS, use the following command:

                 cordova plugin add cordova-plugin-splashscreen --save


Now you can download the files from GitHub and replace the existing ones in the project folder with the downloaded ones.

After downloading the files from GitHub, use the command line interface (example Cygwin) and place youself in the project folder. Use the following command:

                 npm install

This can take a few minutes before it is done.


Usage
______


To use this app using cygwin you will have to place yourself in the proj map. To start the application in the browser use the command:

                 cordova run browser

For startup for android you will have to either have a android device connected to your computer with a usb cable and debugging activated, or have a android simulator on your computer. Then use the following command:

                 cordova run android

In case you plan to make any changes to the code, make sure to compile the files using the following command:

                npm run watch

If you plan to make any changes to the css file you will also have to compile it with the following command:

                npm run sass-compile




Author and developer:
Joris Bomert
2018