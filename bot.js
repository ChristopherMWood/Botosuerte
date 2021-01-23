const tmi = require('tmi.js');
require('dotenv').config();

const username = process.env.USERNAME
const oauth = process.env.OAUTH
const channel = process.env.CHANNEL

const opts = {
  identity: {
    username: username,
    password: oauth
  },
  channels: [
    channel
  ]
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();

function onMessageHandler (target, context, msg, self) {
  if (self) { return; }

  var commandName = msg.trim().toLowerCase();

  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}