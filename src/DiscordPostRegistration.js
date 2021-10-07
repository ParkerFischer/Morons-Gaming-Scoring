//this is used to post to discord for registration
const webhook = require("webhook-discord");

const Hook = new webhook.Webhook(
  "https://discord.com/api/webhooks/895504408937385984/nyaGB_SelPz6RB_gEVvLEWjzTtxxJMy1NSApVta40xGFDCOQpJ0KZM_F2DgBu4OtHN9x"
);

export default function postMessageToDiscord(message, name) {
  return Hook.info(`${name}`, `${message}`);
}
