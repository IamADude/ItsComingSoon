// Dependencies
const Command = require('../../structures/Command.js');

module.exports = class Flip extends Command {
	constructor(bot) {
		super(bot, {
			name: 'flip',
			dirname: __dirname,
			botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
			description: 'Flip een muntje.',
			usage: 'flip',
			cooldown: 1000,
		});
	}

	// Run command
	async run(bot, message, args, settings) {
		// Get the random facts file
		message.sendT(settings.Language, 'FUN/FLIP_CHOICE', Math.round(Math.random()));
	}
};
