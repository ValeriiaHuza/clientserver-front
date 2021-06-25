
const key =  "thisisa128bitkey";

function encrypt(messagу){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(message){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}
