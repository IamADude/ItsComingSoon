// Dependencies
const	Command = require('../../structures/Command.js');

module.exports = class Addban extends Command {
	constructor(bot) {
		super(bot, {
			name: 'voegban',
			ownerOnly: true,
			dirname: __dirname,
			botPermissions: [ 'SEND_MESSAGES', 'EMBED_LINKS'],
			description: 'Voegt een ban toe aan de globale banlist.',
			usage: 'voegban <persoon> <reden>',
			cooldown: 3000,
		});
	}

	// Run command
	async run(bot, message, args, settings) {
		// something will happen
		return settings;
	}
};
