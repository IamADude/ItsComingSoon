const languageData = {
	// Misc
	TOO_POWERFUL: 'Ik kan deze persoon niet verbannen vanwege machtigingen.',
	SELF_PUNISHMENT: 'Je gaat jezelf toch niet straffen',
	NOT_INVOICE: (user) => `${user} is geen spraakkanaal`,
	REASON: (reason) => `**Reden:** ${reason}`,

	// successfull moderation
	SUCCESSFULL_BAN: (user) => `*${user} is succesvol verbannen*.`,
	SUCCESSFULL_DEAFEN: (user) => `*${user} is succesvol verdoofd*.`,
	SUCCESSFULL_MUTE: (user) => `*${user} is succesvol gemute*.`,
	SUCCESSFULL_KICK: (user) => `*${user} is succesvol gekicked*.`,
	SUCCESSFULL_NICK: (user) => `*Succesvol de bijnaam veranderd van ${user}.*`,
	SUCCESSFULL_SLOWMODE: (time) => `Slowmode gezet naar **${time}**.`,
	SUCCESSFULL_UNBAN: (user) => `*${user} is succesvol unbanned*.`,
	SUCCESSFULL_UNMUTE: (user) => `*${user} is succesvol ungemuted*.`,
	SUCCESSFULL_UNDEAFEN: (user) => `*${user} is succesvol ongedempt*.`,
	SUCCESSFULL_REPORT: (user) => `*${user} is succesvol aangegeven*.`,
	SUCCESSFULL_WARN: (user) => `${user} is gewaarschuwd`,
	SUCCESSFULL_KWARNS: (user) => `*${user} is succesvol gekicked vanwege teveel waarschuwingen*.`,
	// WARNINGS
	CLEARED_WARNINGS: (user) => `Waarschuwingen voor  ${user} zijn verdwenen.`,
	NO_WARNINGS: 'Dit persoon is nog nooit gewaarschuwd, goed bezig!',
	WARNS_TITLE: (user) => `${user}'s waarschuwingen lijst.`,
	// CLEAR MESSAGES
	MESSAGES_DELETED: (messages) => `${messages} berichten succesvol gewist.`,
	// NICKNAME
	ENTER_NICKNAME: 'Kies wel een bijnaam.',
	LONG_NICKNAME: 'Bijnaam moet korter zijn dan 32 karaters.',
	UNSUCCESSFULL_NICK: (user) => ` Ik kan helaas niet  ${user} zijn bijnaam veranderen.`,
	// REPORT COMMAND
	REPORT_AUTHOR: '~Lid reported~',
	REPORT_MEMBER: 'Lid:',
	REPORT_BY: 'Gerapporteerd door:',
	REPORT_IN: 'Gerapporteerd in:',
	REPORT_REASON: 'Reden:',
	// ticket command
	TICKET_EXISTS: 'Maar je hebt toch al een ticket kanaal?',
	NO_SUPPORT_ROLE: 'Geen support rol is er op deze server',
	NOT_SUPPORT: 'Je hebt niet de juiste machtigingen om deze ticket te sluiten.',
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
