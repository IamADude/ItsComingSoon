// This contains language files for the commands
const languageData = {
	GUILD_COMMAND_ERROR: 'Dat commando kan alleen in een server worden uitgevoerd.',
	COMMAND_COOLDOWN: (seconds) => `Je moet ${seconds} seconden wachten tussen elk commando.`,
	BLACKLISTED_CHANNEL: (user) => `**${user}**, Dat commando is uitgeschakeld in dit kanaal.`,
	NOT_NSFW_CHANNEL: 'Dat commando kan alleen gebruikt worden in een NSFW kanaal.',
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
