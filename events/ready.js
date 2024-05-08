const { Events } = require('discord.js');

module.exports = {
    // States which property event this file is for
	name: Events.ClientReady,
    // Boolean value to specify if event should only run once
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};