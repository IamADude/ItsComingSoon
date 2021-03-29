const languageData = {
	// SUCCESS
	LANGUAGE_SET: (language) => `Taal veranderd naar \`${language}\`.`,
	LEVEL_SET: (option) => `Level plugin is verzet naar \`${option}\`.`,
	MODERATION_SET: (option) => `Moderatie plugin is verzet naar \`${option}\`.`,
	MUSIC_SET: (option) => `Muziek plugin is verzet naar \`${option}\`.`,
	NSFW_SET: (option) => `NSFW plugin is verzet naar \`${option}\`.`,
	SEARCH_SET: (option) => `Zoek plugin is veranderd naar \`${option}\`.`,
	LOGS_SET: (option) => `Logging plugin is verzet naar \`${option}\`.`,
	// error message
	MISSING_LANGUAGE: 'Geen taal gekozen',
	NO_LANGUAGE: 'Helaas spreek ik die taal nog niet, waarom help je me die niet leren op : https://discord.gg/unHR22wNTB',
	// other success messages
	LOG_CHANNEL: (channelID) => `Logging kanaal veranderd naar: <#${channelID}>`,
};

const translate = (key, args) => {
	const translation = languageData[key];
	if (typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
