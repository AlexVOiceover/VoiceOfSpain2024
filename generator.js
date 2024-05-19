const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, 'images/clients')
fs.readdir(directoryPath, function (err, files) {
	if (err) {
		return console.log('Unable to scan directory: ' + err)
	}
	const imageElements = files.map(function (file) {
		return `<div class="swiper-slide"><img class="client-image" src="./images/clients/${file}" alt="${path.basename(file, path.extname(file))}" loading="lazy" /></div>`
	})
	console.log(imageElements.join('\n'))
})
