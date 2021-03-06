// Dependencies
const Command = require('../../structures/Command.js');

module.exports = class Privacy extends Command {
	constructor(bot) {
		super(bot, {
			name: 'privacy',
			dirname: __dirname,
			aliases: ['priv'],
			botPermissions: [ 'SEND_MESSAGES', 'EMBED_LINKS'],
			description: 'Stuurt een link naar het privacybeleid.',
			usage: 'privacy',
			cooldown: 2000,
		});
	}

	// Run command
	async run(bot, message, args, settings) {
		// Send link to privacy policy
		message.channel.send({ embed:{ description:`[${message.translate(settings.Language, 'MISC/PRIVACY_POLICY')}](https://github.com/d)` } });
	}
};
