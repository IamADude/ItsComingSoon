const languageData = {
	LEADERBOARD_TITLE: 'Scorebord',
	LEADERBOARD_FIELDT: 'Geen data gevonden',
	LEADERBOARD_FIELDDESC: 'Typ alsjeblieft in de chat om punten te ontvangen',
	NO_MESSAGES: 'Je bent nog niet geranked, stuur wat berichten en probeer het opnieuw.',
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
