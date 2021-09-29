


export default function postMessageToDiscord(message) {

    message = message || "Hello World!";
  
    var discordUrl = 'https://discord.com/api/webhooks/892876362443005982/CRTQTiHzR3EcWckIWsK91okq23PwbQ5kgW0_m0rkY8EmEAnR2vlp2dkoxWZA7DMP1OXT';
    var payload = JSON.stringify({content: message});
  
    var params = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      payload: payload,
      muteHttpExceptions: true
    };
  
    var response = UrlFetchApp.fetch(discordUrl, params);
  
    Logger.log(response.getContentText());
  
  }