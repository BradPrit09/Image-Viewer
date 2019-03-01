# Image-Viewer

[![N|Solid](https://i0.wp.com/flixtel.in/wp-content/uploads/2018/02/cropped-mpls-new-1.png?resize=150%2C150)](https://www.upgrad.com/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/BradPrit09/Image-Viewer.git)

In this project, we worked on developing ImageViewer , a web application using React, which allows a user to view his/her own profile and the images posted by the user on his/her Instagram account.
 
# New Features!
The following API endpoints are  implemented in respective classes:

  - Profile-"https://api.instagram.com/v1/users/self/?access_token=YourAccessToken"
  - Profile-"https://api.instagram.com/v1/users/self/media/recent?access_token=YourAccessToken"
  


You can also:
  - Fetch all the images that have been posted in the web application by the user
  - Fetch all the likes posted by a specific user.
  - Create comment and fetch it all or in a specified way as per the user.
  - Add like to an images.



> The overall goal of this project is to see implementation of DevOps.


### Pre-Requisite

Image-Viewer uses a number of open source projects to work properly:

* [Visula Studio Code](https://code.visualstudio.com/download)
* [Npm](https://www.npmjs.com/get-npm)
* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/)


And of course Image-Viewer itself is open source with a [public repository](https://github.com/BradPrit09/Image-Viewer/) on GitHub.

### Installation

This project  requires [NPM](https://www.npmjs.com/get-npm)  v6.8.0 to run and we need [Nodejs](https://nodejs.org/en/download/) LTS Version: 10.15.2 driver.



```sh
 1.Download the file placed on Github.

OR

 2.Use the URL https://github.com/BradPrit09/Image-Viewer to clone the repository on your local machine

 3.Once the project gets imported in you local workspace,Open the Folder using Visual Studio Code for Devlopment purpose
 
 Either
 
 4.To run the Project,Open Command Prompt in the Project Directory
 
 5.Check if Node.js is installed on your machine by writing the following command: node -v
 
 6.After Node.js is successfully installed on your system, type the following command in your Command Prompt: npm i -g create-react-app
    NPM installs create-react-app package globally on your machine so that you can create a React application at any valid path on your system.
 
 7.In the Command Prompt, go to the path on your system where you want to create your application.
  Create your React application using the create-react-app package that you installed on your machine in the previous step. For this,      you would type a command which mentions create-react-app followed by the name of your application.

    For example, here, the name of your application is imageapp. Thus, the command can be written as follows:
      create-react-app imageapp
      
 8.This command will create a folder with the name that you mentioned inside your current path in the Command Prompt. This folder will consist of all the necessary configuration files that you need
 
 9. Go the application folder that you created on your current path inside the Command Prompt.
   cd imageapp
   
 10. Now you are ready to start a development server locally on your machine and run your application in development mode. For this, write the following command in your Command Prompt: npm start
 
 11.HOLA! Your default browser will open your application in http://localhost:3000/
```


## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    screens/
    common/
    client/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Browsers

By default, the generated project supports all modern browsers.<br>
Support for Internet Explorer 9, 10, and 11 requires [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).





### Development

Want to contribute? Great!
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands after changes are made from local repository.

First Tab:
```sh
$ git init
```

Second Tab:
```sh
$ git add .
```

 Third:
```sh
$ git commit -m "Message For Commit Done"
```
Fouth:
```sh
$ git push origin patch
```

### Todos

 - Write MORE Tests
 





**Free Software, Hell Yeah!**

