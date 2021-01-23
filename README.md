## Setup
Create a file called .env with the following fields

```
USERNAME=<value here>
OAUTH=<value here>
CHANNEL=<value here>
```

```npm install``` in your local directory then run ```npm start``` to launch the electron app

## Building Production
Electron forge builds the app to all platforms using the following commands
- ```electron-forge package```
- ```electron-forge make```