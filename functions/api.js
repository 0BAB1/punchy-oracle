const MinaSigner = require('mina-signer');

/**
 * This file defines the API endpoint that shall return the current
 * date with an adjusted 2 minutes time step. See note below.
 */

const signer = new MinaSigner({ network: 'testnet' });

exports.handler = async function(event, context) {
    /**
     * Regarding the response time & time step,
     * We layed the hypothesis that the total response
     * time is lower than and not equal to 2 minutes
     * ie 120_000 ms. Which is an acceptable time step.
     * This is due to the fact that the user has to know the time
     * but the contract does not get the said time exactly when the
     * user does, due to delays in server responses.
     */
    const currentTime = Math.floor(Date.now()/120000);
    
    // Retrieve keys from environment variables
    const publicKey = process.env.PUBLIC_KEY;
    let privateKey = process.env.PRIVATE_KEY;

    // Create a signature
    const dataToSign = [ currentTime ];
    const signature = signer.signMessage(dataToSign, privateKey);

    return {
        statusCode: 200,
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: {time : dataToSign[0]},
            signature: signature.signature,
            publicKey: signature.publicKey,
        })
    };
};
