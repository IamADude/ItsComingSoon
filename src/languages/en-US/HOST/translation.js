const languageData = {
	EVAL_NO_OWNER: '**Wat ben je allemaal aan het doen?**',
	EVAL_ERROR: (error) => `Fout bij evulatie: \`${error}\``,
	EVAL_RESPONSE: (diff) => `*Uitgevoerd in ${diff[0][0] > 0 ? `${diff[0][0]}s` : ''}${diff[0][1] / 1000000}ms.*\`\`\`javascript\n${diff[1]}\n\`\`\``,
	RELOAD_ERROR: (name) => `Kan niet herladen: \`${name}\`.`,
	RELOAD_NO_COMMAND: (name) => `${name} is geen commando.`,
	RELOAD_SUCCESS: (name) => `Commando: \`${name}\` is herladen`,
	SHUTDOWN: 'Oh.. ok vaarwel :disappointed_relieved:',
	SHUTDOWN_ERROR: (error) => `ERROR: ${error}`,
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
