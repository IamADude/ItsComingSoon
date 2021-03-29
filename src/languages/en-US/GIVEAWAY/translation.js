// This contains language files for the commands
const languageData = {
	SUCCESS_GIVEAWAY: (action) => `Success! Giveaway ${action}!`,
	UNKNOWN_GIVEAWAY: (message) => `Geen giveaway gevonden met ID: \`${message}\`, controleer het en probeer het nog eens.`,
	EDIT_GIVEAWAY: (time) => `Success! Giveaway wordt geupdate in minder dan ${time} seconden.`,
	INCORRECT_WINNER_COUNT: 'Winnaar tellen moet wel een getal zijn',
	//
	GIVEAWAY_DATA: {
		giveaway: '🎉\t**GIVEAWAY**\t🎉',
		giveawayEnded: '🎉\t**GIVEAWAY AFGELOPEN**\t🎉',
		timeRemaining: 'Tijd over: **{duration}**!',
		inviteToParticipate: 'Reageer met 🎉 om mee te doen!',
		winMessage: 'Gefeliciteerd, {winners}! Jullie winnen **{prize}**!\n{messageURL}',
		noWinner: 'Giveaway afgelopen, ongeldige participanten.',
		hostedBy: 'Gehost door: {user}',
		winners: 'winner(s)',
		endedAt: 'Afgelopen om',
		units: {
			seconds: 'seconden',
			minutes: 'minuten',
			hours: 'uren',
			days: 'dagen',
		},
	},
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
