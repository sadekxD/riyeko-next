const checkValidDiscordId = (discordVal) => {
	var allow_ascii_match = /(?=\S+)#[\d]{4}$/;
	var discord_word_match = /(discordtag|everyone|here|discord)/i;
	var except_chars_match = /[@:,`]/;
	if (
		discordVal != "" &&
		(!allow_ascii_match.test(discordVal) ||
			discord_word_match.test(discordVal) ||
			except_chars_match.test(discordVal) ||
			discordVal.match(/#/gi).length > 1)
	) {
		return false;
	} else {
		return true;
	}
};

const checkValidTwitterId = (sn) => {
	return /(?<!\w)@[\w+]{1,15}\b/.test(sn);
};

export { checkValidDiscordId, checkValidTwitterId };
