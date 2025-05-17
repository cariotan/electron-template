module.exports = {
    content: [
        '!./node_modules',
        '**/*.html',         // your main HTML file
        '**/*.ejs',         // your main HTML file
        './src/**/*.{js,ts}',   // optional if you put Alpine code in external files
        './renderer.js'         // if you keep logic separate from preload
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}