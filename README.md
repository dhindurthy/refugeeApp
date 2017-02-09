## Summary

The website is to expose the functionalities that can be implemented using AngularJS for various purposes, in this case it is used to perform Create-Read-Update-Delete functionalities.

* * *

## Installation

* `git clone` this repository
* Install node on your machine
* `npm install`

## Running

* `node server.js`
* Visit your app at http://localhost:5076.

##Technical Specifications

###Client
* The whole website is built on AngularJS framework version 1.4.5.
* Charts are built using the third party tool Highcharts.
* The styling part is handled by the Bootstrap framework version 3.1.1. It uses the bootstrap implementation of the layout to support mobile platform usage of the site.
* HTML 5 and CSS 3 are used to build the entire app
* Local Storage which is the feature of HTML 5 is being used here to store the data whenever user inputs are given.
* The data being displayed in the charts section is stored in 'json' files and it is accessed by appropriate methods in the code.

###Server
* Node is used to create a server to host the app and on running the above mentioned steps as in the 'Running' section, the app can be accessed.
* Running the app on node server enables the app to behave like its on a server host.
* The following MIME types are accepted by this app:
"html": "text/html",
"jpeg": "image/jpeg",
"jpg": "image/jpeg",
"png": "image/png",
"js": "text/javascript",
"css": "text/css"

## Functionality

* After entering the section, you can find buttons to "Add" or "Delete" the data
* For every data entry there is an invidual option to edit or delete that particular entry. 
* On hitting the 'i' icon with every entry, the user can view the details of that entry. 
* There is a chart below which updates by itself everytime a new entry is made and the buttons for years can be used to view chart for that particular year. 
* On hovering the chart, it flips to show the details of all the entries for all years made until that point of time.
* There is a section for comments in the 'help' page where the comments can be made and the date of comment is captured.

##Additional Features

* It displays the data of the refugees in the "dashboard" part for the years specified(this is genuine data) collected from variuos sites handled by both government of USA and alos private sites.

##Note

*This web app was developed in an intention of using the features provided by various technologies and not intended towards moving to a production environment. 
