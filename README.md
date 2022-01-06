# iwa-ca1

*Welcome to MyDiary App* 

Application was developed using Gitpod.io > https://gitpod.io/#https://github.com/thiagocruzfurtado/-iwa-ca1

All of my code was stored in my personal Github repository. > https://github.com/thiagocruzfurtado/-iwa-ca1

This project was bootstrapped with Create React App. > https://create-react-app.dev/


*How to run the project*

To initialize the front and back end, follow the steps:

Navigate to the "cd. \frontend" and "cd. \backend" folder and run the command "npm install";

Navigate to the "cd. \frontend" and "cd. \backend" folder and run the command "npm run start";

Both ports (3000 and 3333) should be on Public;

Go to the "\frontend\src\services\api.js" file and change the field "baseURL:" for the URL created on your browser when the application is started;
ex:
baseURL: "https://3000-xxxxxxxx-xxxxxxx-xxxxxxx.xx-xxxx.gitpod.io/"
to open correctly change the numbers 3000 to 3333.
baseURL: "https://3333-xxxxxxxx-xxxxxxx-xxxxxxx.xx-xxxx.gitpod.io/"

Select "Open Browser" on port 3000 to open the application;

The application is ready to be used!;

*Backend*
	The Node.js project was started with the “npm init” command, after inserting all the package.json settings, a main Index.js application file was created, in this file the Express server was created, and some libraries and settings were applied to the server. Two files were also imported, AuthController and PostController. 
The file structure was created in: Controllers, Database, Models, and Utils. 
The controller files are the routes that the frontend application will consume, within the “AuthController” there are two routes, register and login. 
Using the authentication strategy “Jwt” (Json Web Token), at PostController CRUD routes were created for handling posts, using middleware for authenticating and protecting routes. It was decided to use files in Json format, composing the database by users.json and posts.json. 
The Models Post and User was created to manipulate the data and write to the files, a Schema class was defined in the files, and a Model class for each entity, we used the “lodash” and “uuid” library to assist in data manipulation. 
It was created for database, being two functions, one to obtain the data and the other to write the data in json, the FS library was used for the help. 

*Frontend*
	ReactJS was used as a framework, a React project was started using the create-react-app configuration package. 
It was decided the file structure in components, pages, routes, services. 
The user can login or register using an email and password. 
For api calls the Axios library was used, and the authentication strategy was through localstorage. 
Each part of the site was divided into components, footer, header, navbar, postform and listposts.

