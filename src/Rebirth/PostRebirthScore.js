
//this is used to post to discord for Rebirth
const webhook = require("webhook-discord")

const Hook = new webhook.Webhook("https://discord.com/api/webhooks/892876362443005982/CRTQTiHzR3EcWckIWsK91okq23PwbQ5kgW0_m0rkY8EmEAnR2vlp2dkoxWZA7DMP1OXT")

export default function postMessageToDiscord(message, name) {
return Hook.info(`${name}`,`${message}`)

}
