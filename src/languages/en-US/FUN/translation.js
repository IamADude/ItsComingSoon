// This contains language files for the commands
const languageData = {
	FACT_TITLE: 'Random Feitje:',
	FLIP_CHOICE: (choice) => `${['Kop', 'Munt'][choice]}`,
	MEME_TITLE: 'Van',
	MEME_FOOTER: 'Medemogelijk gemaakt door',
	MISSING_POKEMON: 'Die pokemon bestaat niet.',
	RANDOM_RESPONSE: (number) => `Willekeurig nummer: ${number}`,
	REMINDER_MESSAGE: (r) => `Ik zal je herrineren over \`${r[0]}\` in ongeveer ${r[1]}.`,
	REMINDER_DESCRIPTION: 'Bericht link',
	REMINDER_RESPONSE: (r) => `${r[0]} Jouw herinnering: ${r[1]}`,
	REMINDER_TITLE: 'herinnering',
	REMINDER_FOOTER: (time) => `Herinnering van ${time} geleden.`,
	RPS_FIRST: 'Jij kiest',
	RPS_SECOND: 'Ik kies',
	RPS_RESULT: (winner) => `Uitslag: ${winner} heeft gewonnen!`,
	INCORRECT_URBAN: (phrase) => ` Zin: \`${phrase}\` was niet gevonden in het woordenboek.`,
	URBAN_TITLE: (word) => `Definitie van ${word}`,
	URBAN_DESCRIPTION: (r) => `${r[0]}\n**Example:**\n${r[1]}`,
	PERSON_AUTHOR: 'Ik heb een persoon gevonden waarvan de naam is ',
	PERSON_FOOTER: 'Let op : Deze zijn allemaal gegenereerd door een API.',
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
