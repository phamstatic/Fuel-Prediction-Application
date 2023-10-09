## Instructions on React Development (Front-End)
Prerequisites: Console and Visual Studio Code.

### Installing Node.js
> We're gonna need Node.js to be able to use React <br>
Using the Linux terminal, 
```bash
sudo apt-get install curl # Need this to be able to install Node.js
nvm install --lts # Installs Node.js

node -v # Should be v18.18.0

# You'll also need to download these frameworks for multi-page navigation.
npm install react-router-dom 
npm install --save styled-components
```
### Beginning React Development
Pull the repository for any updates to the main branch (git pull) or clone (git clone https://github.com/phamstatic/Fuel-Prediction-Application/) into a new folder.

Open the front-end folder and type in the console: **npm install** <br>
> This is needed because our .gitignore file does not save the modules into our repository. Using npm install will give you the required dependencies and packages to make React work.

To begin hosting the app, run **npm start**
> Now the application should be on a local port running on the browser. Any change/edit done will be updated automatically.

### Instructions on Express Development (Back-End)
Split the console/terminal for the application into two.
```bash
cd back-end
npm install express cors
npm install nodemon --save-dev
npm run dev # This is so we can run our Node scripts, which will auto-update the back-end whenever it is changed.
```
```bash
cd front-end
npm start
```
Running each individual part in their own console simultaneously will give us our connected application.

# DONT FORGET TO BRANCH OUT WHEN DEVELOPING
