const MinaSigner = require('mina-signer');

/**
 * This file defines the API endpoint that shall return the current date
 */

const signer = new MinaSigner({ network: 'testnet' });

exports.handler = async function(event, context) {
    const currentTime = Date.now();
    
    // Retrieve keys from environment variables
    const publicKey = process.env.PUBLIC_KEY;
    let privateKey = process.env.PRIVATE_KEY;

    // Create a signature
    const dataToSign = [ BigInt(currentTime) ];
    const signature = signer.signFields(dataToSign, privateKey);

    return {
        statusCode: 200,
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: {time : Number(dataToSign[0])},
            signature: signature.signature,
            publicKey: signature.publicKey,
        })
    };
};
