# Oracle

This simple oracle is used by the project smart contracts to retrieve the current time.

This small project was setup for easy deployment on netlify.

Returns :

- data {time : currentTime} with an adjusted 2 minute step
- publicKey : the publicKey of the server
- signature : time data signed using server's provate key to authenticate the oracle and approve the data

# Test the API

```npm install```

```netlify dev```

connect to :

```https://localhost:8888/.netlify/functions/api```

# Link to live api :

[LIVE API](https://punchoracle.netlify.app/.netlify/functions/api)

Associated public key : B62qjrPXot2doFFCpT228TKe6hsfGEUnRmDFoWKFo1ANCHaxtizaWKp