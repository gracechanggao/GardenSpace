# GardenSpace

## Table of content

- Screenshots
- Description
- Set-up


## Screenshots
Dashboard

The first page is called "Dashboard". It is responsible for the reminder the client to take care of the plants and demonstrating the states of the plants. "To do List" alerts users to look after their plants. There are four hidden images below the "Current Situation" to demonstrate the states. The states include the temperature/ humidity, moisture and light of the plant. In additional, the hidden images are real-time updated and detecting by the sensors around the plant.

![https://github.com/gracechanggao/GardenSpace/blob/master/screenshots/Dashboard.png)

Garden

The second page is named "Garden". People can search the articles about the plants and GardenSpace. In additional, people can share, comment and like the article if they are interested in the article.
![Garden](https://github.com/gracechanggao/GardenSpace/blob/master/screenshots/Garden.png)

Account 

The third interface is called "Account". It is a personal space. There are three icons designed for three functions. The first icon contains a timeline to show the history of people’s plants with the images. The second icon works for demonstrating the information of the plant. The last icon is used for recording the history of indexes.

![Account](https://github.com/gracechanggao/GardenSpace/blob/master/screenshots/3.png)

## Description

### What is GardenSpace? 
GardenSpace is an IoT product. To be more specific, it is using the power of technology to help people growing plants in their home.People can make an order online and make a request about the size then GardenSpace would deliver one box to their home. The box includes the plants, faculties and the soil. After users receiving plants, GardenSpace provides the 24 hours monitoring of the plants to make sure users can obtain the notifications when their plants need help. The image on the right hand is showing the working process of GardenSpace

### What I have done?  

I use Ionic to create the smartphone application and develop the basic interfaces of the smartphone application. At the current stage, the application contains five interfaces:“Login”,“Register”, “Dashboard”, “Garden”and “Account”.  There are different functions inside each interface. Some functions in the software are not completed working because lacking support from the database. At last, I manually tested all the functions in the application to make sure every function was working correctly.

## Set-up  

1. Install Inoic  

npm install -g cordova ionic  
The deatil could following next link.  

https://ionicframework.com/getting-started  


2.Download GardenSpace in git  

cd GardenSpace  

ionic serve
