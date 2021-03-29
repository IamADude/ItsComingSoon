// This contains language files for the commands
const languageData = {
	ABOUT_MEMBERS: 'Leden:',
	ABOUT_CHANNELS: 'Kanalen:',
	ABOUT_PROCESS: 'Proces:',
	ABOUT_SERVERS: 'Servers:',
	ABOUT_MESSAGES: 'Berichten gezien:',
	ABOUT_UPTIME: 'Uptime:',
	MISSING_COMMAND: 'Geen commando of plugin.',
	NO_COMMAND: 'Dat commando werkt niet op deze server',
	INVITE_TEXT: 'Invite me naar jouw server',
	PRIVACY_POLICY: 'Privacybeleid',
	STATUS_PING: 'Ping:',
	STATUS_CLIENT: 'Client API:',
	STATUS_MONGO: 'MongoDB:',
	SUPPORT_TITLE: (username) => `${username} support`,
	SUPPORT_DESC: (websites) => `**Onze server:**  [Support Server](${websites[0]})\n **Onze website:**  [Website](${websites[1]})\n **Git Repo:** [Website](https://github.com/IamADude/Richiscool)`,
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
