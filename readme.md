# Oracle

This simple oracle is used by the project smart contracts to retrieve the current time.

This small project was setup for easy deployment on netlify.

Returns :

- data {time : currentTime} with an adjusted 2 minute step
- publicKey : the publicKey of the server
- signature : time data signed using server's provate key to authenticate the oracle and approve the data

Here is a typescript interface for the response :

```typescript
// Declaration
export interface OracleResponse {
  data: {
    time: number
  };
  signature: string;
  publicKey: string;
}

// Usage
const response = await fetch(ORACLE_API);
const data : OracleResponse = await response.json();

const oracleTimestamp = Field(data.data.time);
const oracleSignature = Signature.fromBase58(data.signature);
```

# Test the API

```npm install```

```netlify dev```

connect to :

```https://localhost:8888/.netlify/functions/api```

# Link to live api :

[LIVE API](https://punchoracle.netlify.app/.netlify/functions/api)

Associated public key : B62qjrPXot2doFFCpT228TKe6hsfGEUnRmDFoWKFo1ANCHaxtizaWKp