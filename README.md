# MyNFT-Portfolio

## Project Information
![Project Status](https://img.shields.io/badge/Project%20Status-Completed-green?style=for-the-badge&logo=github)
![Project Size](https://img.shields.io/github/repo-size/JAhimaz/MyNFT-Portfolio?style=for-the-badge&logo=github)

![preview](https://github.com/JAhimaz/MyNFT-Portfolio/blob/main/src/assets/banner.png)

The Sunway Tech Club x Web3 Series is a project that aims to provide a platform for students to learn about the blockchain technology and to build their own NFTs. In this project, we will be using the a created ReactJS + Typescript project to display our minted RMRK NFTs.

A Preview of what this template looks like can be found here:
https://mynft-website-test.web.app/

## Getting Started

1. Clone the repository to your local machine OR click `Code` and `Download Zip`, extract the ZIP anywhere on your local machine.
2. Upon Cloning/Extracting, open the folder in a terminal (If you're using Visual Studio Code, open the project folder -> Terminal -> New Terminal)
3. Run `npm install` to install all the dependencies (Requires NodeJS)
4. Run `npm start` to start the local hosting server and view your current site in a browser
5. Head over to `src/util/myData.ts` and change the data within the object to your own information.
6. Save and Reload the page to see your changes.

# Uploading to Firebase
1. Head over to https://console.firebase.google.com/ and create a new project.
2. Firebase-tools is already included within the dependencies. Hence, skip to step 3.
3. run the command `firebase login` and login with your gmail account that has the created project
4. run the command `npm run build` to build the project.
5. run the command `firebase init` to initialise firebase on the project.
5.1. Using the spacebar, select `Hosting: Configure and deploy Firebase Hosting sites.` (or similar)
5.2. Select your project which you had created on Firebase Console.
5.3. Type `build`
5.4. For Configure as a single-page app question enter `y` for this option.
5.5. For Overwrite your existing build/index.htmlfile. So You'll want to enter `N` (No)
6. Upon completing all questions type thte command `firebase deploy`
7. Just like that your new site will be live. The link to your site will be provided in the console.


Created by Joshua Ahimaz @ 2022 | Sunway Tech Club x Web3 Series

https://joshuaahimaz.com/  
https://github.com/JAhimaz  
https://www.linkedin.com/in/joshuaahimaz/  

Dependencies: 

```
-"@google/model-viewer": "^1.12.0",
-"firebase-tools": "^11.0.1",
-"styled-components": "^5.3.5",
-"swr": "^1.3.0",
-"typescript": "^4.7.3",
```
