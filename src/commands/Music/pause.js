// Dependencies
const Command = require('../../structures/Command.js');

module.exports = class Pause extends Command {
	constructor(bot) {
		super(bot, {
			name: 'pause',
			dirname: __dirname,
			botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
			description: 'Pauses the music.',
			usage: 'pause',
			cooldown: 3000,
		});
	}

	// Run command
	async run(bot, message, args, settings) {
		// Check that a song is being played
		const player = bot.manager.players.get(message.guild.id);
		if (!player) return message.error(settings.Language, 'MUSIC/NO_QUEUE').then(m => m.delete({ timeout: 5000 }));

		// Check that user is in the same voice channel
		if (message.member.voice.channel.id !== player.voiceChannel) return message.error(settings.Language, 'MUSIC/NOT_VOICE').then(m => m.delete({ timeout: 5000 }));

		// The music is already paused
		if (player.paused) return message.error(settings.Language, 'MUSIC/ALREADY_PAUSED', settings.prefix);

		// Pauses the music
		player.pause(true);
		return message.success(settings.Language, 'MUSIC/SUCCESFULL_PAUSE');
	}
};
