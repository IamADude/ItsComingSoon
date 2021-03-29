// This contains language files for the commands
const languageData = {
	// Guild commands
	AVATAR_TITLE: (user) => `Avatar voor ${user}`,
	AVATAR_DESCRIPTION:	'**Links:**',
	NO_GUILD_ICON: 'Deze server heeft geen serverfoto.',
	GUILD_ICON: 'Download',
	POLL_TITLE: (username) => `Poll gemaakt door ${username}`,
	POLL_FOOTER: 'Reager om te stemmen..',

	// Role command
	ROLE_NAME: (roleName) => `Role | ${roleName}`,
	ROLE_MEMBERS: 'Leden:',
	ROLE_COLOR: 'Kleur:',
	ROLE_POSITION: 'Positie:',
	ROLE_MENTION: 'Vermelding:',
	ROLE_HOISTED: 'Hijst:',
	ROLE_MENTIONABLE: 'Vermeldbaar:',
	ROLE_PERMISSION: 'Sleutelmachtigingen:',
	ROLE_CREATED: 'Gemaakt op:',
	ROLE_FOOTER: (r) => `Gevraagd door ${r[0]} | Role ID: ${r[1]}`,
	// user command
	USER_NICKNAME: 'Bijnaam:',
	USER_GAME: 'Game:',
	USER_ROLES: (number) => `Roles [${number[0]}/${number[1]}]:`,
	USER_JOINED: 'Datum van toetreding:',
	USER_REGISTERED: 'Geregistreerd:',
	USER_PERMISSIONS: (number) => `Machtigingen [${number}/31]:`,
	// Server command
	GUILD_NAME: 'Server naam:',
	GUILD_OWNER: 'Server beheerder:',
	GUILD_ID: 'Server ID:',
	GUILD_CREATED: 'Server aangemaakt op:',
	GUILD_REGION: 'Server regio:',
	GUILD_VERIFICATION: 'Verificatie level:',
	GUILD_MEMBER: (number) => `Hoeveelheid leden [${number}]:`,
	GUILD_FEATURES: 'Kenmerken:',
	GUILD_ROLES: (number) => `Rollen [${number}]:`,
	// FOOTER
	INFO_FOOTER: (user) => `Aangevraagd door: ${user}`,
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
