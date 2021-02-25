const templating = require('./template');
const staticFiles = require('./static-file');
const jsonMiddle = require('./jsonMiddle');
const upload = require('./upFile');
const { getUrl, MD5 } = require('./util');
const checkPort = require('./port-use');
const createBrowser = require('./create-browser');

module.exports = {
	templating,
	staticFiles,
	jsonMiddle,
	upload,
	getUrl,
	MD5,
	checkPort,
	createBrowser,
};
