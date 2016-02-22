#AIRFlow

AIRFlow is the API Server for processing and visualizing fNIRS data collected from experiments done at the **Advanced Interaction Research Lab** at Drexel University.

##Getting Started
Rename `setup_air-config.js` to `air-config.js`.

```
mv setup_air-config.js air-config.js
```

Then, change the file so it points to the location of your database and the port you want it to run.

```
module.exports = {
    port: PORT_NUMBER_HERE,
    db:{
        host: 'URL_OF_DATABASE_SERVER',
        port: PORT_ON_WHICH_THE_DATABASE_LISTENS,
        database: 'NAME_OF_DATABASE',
        user: 'USER_ID',
        password: 'PASSWORD'
    }
}
```

Install the required dependencies using `npm install`.

Run the server using `npm start`.