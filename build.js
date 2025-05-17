const fs = require('fs')
const ejs = require('ejs')

const base = fs.readFileSync('views/base.ejs', 'utf-8')
const index = fs.readFileSync('views/index.ejs', 'utf-8')

const indexHtml = ejs.render(base, { body: index })

// Ensure the 'public' folder exists
if (!fs.existsSync('public')) {
	fs.mkdirSync('public', { recursive: true })
}

fs.writeFileSync('public/index.html', indexHtml)