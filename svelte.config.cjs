const sveltePreprocess = require('svelte-preprocess')

module.exports = {
    emitCss: false,
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: sveltePreprocess()
}
