const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about a user or a server!')
    .addSubcommand(subcommand => 
        subcommand
            .setName('user')
            .setDescription('Info about a user'))
    .addSubcommand(subcommand =>
        subcommand
            .setName('server')
            .setDescription('Info about the server')),
    async execute(interaction) {
        if(interaction.options.getSubcommand() === 'user') {
            await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
        }
        if(interaction.options.getSubcommand() === 'server') {
            await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
        }
    }
};