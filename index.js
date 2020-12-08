const Discord = require('discord.js');
const command = require('./commands/remind.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.commands.set(command.name, command);

client.once('ready', () => {
    console.log('Remindobot online!');
});

client.on('message', message => {
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(1).split(/ +/);
    const command = client.commands.get(args.shift().toLowerCase());
    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Failed to execute that command!');
    }
});

client.login('[discord token here]');