const crypto = require('crypto');
const encrypt_password = '6ac2b3b08ce481c8016ee2067ba44081';
const decipher =  crypto.createHash('sha256', encrypt_password).update("af the akn sao naof")
.digest('hex');

// var decrypted = decipher.update(encrypt_password,'hex', 'utf8');
// decrypted += decipher.final('utf8');
console.log(decipher);


// "browser": {
//   "crypto": false,
//   "https": false
// }