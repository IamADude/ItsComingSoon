const languageData = {
	GENERATING_IMAGE: 'Jouw foto halen...',
	TEXT_OVERLOAD: (number) => `Bericht mag niet meer zijn dan ${number} karakters.`,
	GENERATE_DESC: (images) => `**1 afbeelding is nodig**:\n\`${images[0]}\`. \n**2 afbeeldingen zijn nodig**:\n\`${images[1]}\`.`,
	INVALID_FILE: 'Dat bestandsformaat wordt momenteel niet ondersteund.',
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
