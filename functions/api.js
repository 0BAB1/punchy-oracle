const MinaSigner = require('mina-signer');

const signer = new MinaSigner({ network: 'testnet' });

exports.handler = async function(event, context) {
  const currentTime = Date.now();
  
  // Retrieve keys from environment variables
  const publicKey = process.env.PUBLIC_KEY;
  let privateKey = process.env.PRIVATE_KEY;

  // Create a signature
  const dataToSign = { time: currentTime };
  const signature = signer.signMessage(dataToSign, privateKey);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: dataToSign,
      signature: signature,
      publicKey: publicKey
    })
  };
};
