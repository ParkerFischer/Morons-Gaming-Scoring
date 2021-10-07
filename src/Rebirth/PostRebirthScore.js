//this is used to post to discord for Rebirth
const webhook = require("webhook-discord");

const Hook = new webhook.Webhook(
  "https://discord.com/api/webhooks/895504656967540736/jmA7nZcqTOUmT7_VdDe4IuZUJr8BWTl1qwMrHz1ZJm9qv3TjpefEiXlZPd99Brgdzd2u"
);

export default function postMessageToDiscord(message, name) {
  return Hook.info(`${name}`, `${message}`);
}
