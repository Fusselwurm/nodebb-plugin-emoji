var	emoji = require('emoji-images'),
	nconf = module.parent.require('nconf'),
	Emoji = {};

function render(postContent) {
	return postContent.replace(/(^|<\/code>)([^<]*|<(?!code>))*(<code>|$)/g, function (match) {
		return emoji(match, nconf.get('url') + '/plugins/nodebb-plugin-emoji/images');
	});
}

Emoji.addEmoji = function(data, callback) {
	data.postData.content = render(data.postData.content);
	callback(null, data);
};

module.exports = Emoji;
