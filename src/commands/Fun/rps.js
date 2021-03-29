// Dependencies
const { MessageEmbed } = require('discord.js'),
	choices = ['steen', 'papier', 'schaar'],
	Command = require('../../structures/Command.js');

module.exports = class RPS extends Command {
	constructor(bot) {
		super(bot, {
			name: 'rps',
			dirname: __dirname,
			botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
			description: 'Speel steen papier schaar.',
			usage: 'rps <steen | papier | schaar>',
			cooldown: 1000,
		});
	}

	// Run command
	async run(bot, message, args, settings) {
		// Make sure a choice was made
		if (!args[0]) {
			if (message.deletable) message.delete();
			return message.error(settings.Language, 'INCORRECT_FORMAT', settings.prefix.concat(this.help.usage)).then(m => m.delete({ timeout: 5000 }));
		}

		// Check that the response is from choices
		if (!choices.includes(args[0].toLowerCase())) {
			if (message.deletable) message.delete();
			return message.error(settings.Language, 'INCORRECT_FORMAT', settings.prefix.concat(this.help.usage)).then(m => m.delete({ timeout: 5000 }));
		}

		// Make sure rock, paper or scissors was their choice
		if (args[0].includes('papier') || args[0].includes('steen') || args[0].includes('schaar')) {

			// Bot decision time
			const choice = choices[Math.floor(Math.random() * choices.length)];
			let winner;
			if (choice == args[0]) {
				winner = 'niemand';
			} else if ((choice == 'steen' && args[0] == 'schaar') || (choice == 'papier' && args[0] == 'steen') || (choice == 'schaar' && args[0] == 'papier')) {
				winner = 'bot';
			} else {
				winner = 'persoon';
			}

			// send results
			const embed = new MessageEmbed()
				.setTitle('Rock Paper Scissors')
				.setDescription(`**${message.translate(settings.Language, 'FUN/RPS_FIRST')}:** ${args[0]}
	      **${message.translate(settings.Language, 'FUN/RPS_SECOND')}:** ${choice}\n
	      ${message.translate(settings.Language, 'FUN/RPS_RESULT', winner)}`);
			message.channel.send(embed);
		}
	}
};
