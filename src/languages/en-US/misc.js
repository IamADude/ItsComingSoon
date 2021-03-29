const languageData = {
	ERROR_MESSAGE: 'Er is een fout opgetreden bij het uitvoeren van dit commando, probeer het opnieuw of neem contact op met support.',
	INCORRECT_FORMAT: (commandExample) => `Alsjeblieft gebruik formaat: \`${commandExample}\`.`,
	MISSING_PERMISSION: (permission) => `Ik mis deze machtiging: \`${permission}\`.`,
	USER_PERMISSION: (permission) => `Hoho, je mist de permissie: \`${permission}\`.`,
	MISSING_ROLE: 'Ik kan deze rol niet vinden',
	NO_REASON: 'Geen reden gegeven.',
	// external files/plugins
	INCORRECT_DELIMITERS: 'Gebruik een van de volgende tijdsbegrenzers: `d`,  `h`,  `m`, `s`.',
	NOT_NUMBER:'Moet een getal zijn.',
	MAX_TIME: 'Kan niet lannger zijn dan 10 dagen.',
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
