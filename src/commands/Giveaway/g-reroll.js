// Dependencies
const	Command = require('../../structures/Command.js');

module.exports = class G_reroll extends Command {
	constructor(bot) {
		super(bot, {
			name: 'g-reroll',
			guildOnly: true,
			dirname: __dirname,
			aliases: ['giveaway-reroll', 'greroll'],
			userPermissions: ['MANAGE_GUILD'],
			botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
			description: 'reroll een giveaway.',
			usage: 'g-reroll <BerichtID>',
			cooldown: 2000,
		});
	}

	// Run command
	async run(bot, message, args, settings) {
		// Make sure the user has the right permissions to use giveaway
		if (!message.member.hasPermission('MANAGE_GUILD')) return message.error(settings.Language, 'USER_PERMISSION', 'MANAGE_GUILD').then(m => m.delete({ timeout: 10000 }));

		// Make sure the message ID of the giveaway embed is entered
		if (!args[0]) {
			if (message.deletable) message.delete();
			return message.error(settings.Language, 'INCORRECT_FORMAT', settings.prefix.concat(this.help.usage)).then(m => m.delete({ timeout: 5000 }));
		}

		// re-roll the giveaway
		const messageID = args[0];
		bot.giveawaysManager.reroll(messageID).then(() => {
			message.sendT(settings.Language, 'GIVEAWAY/SUCCESS_GIVEAWAY', 'rerolled');
		}).catch((err) => {
			bot.logger.error(err);
			message.sendT(settings.Language, 'GIVEAWAY/UNKNOWN_GIVEAWAY', messageID);
		});
	}
};
