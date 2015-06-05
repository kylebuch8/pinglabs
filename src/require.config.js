/* global requirejs, require */

requirejs.config({
    baseUrl: '.',
    paths: {
        lodash: 'lib/lodash-amd/compat/main',
        text: 'lib/requirejs-text/text',
        requirejs: 'lib/requirejs/require',
        'requirejs-text': 'lib/requirejs-text/text',
        'lodash-amd': 'lib/lodash-amd/compat/main',
        Phaser: 'lib/phaser/build/phaser',
        phaser: 'lib/phaser/build/phaser',
        tinycolor: 'lib/tinycolor/tinycolor',
        paperclip: 'lib/paperclip/dist/paperclip.min'
    },
    shim: {
        paperclip: {
            exports: 'paperclip'
        }
    },
    packages: [

    ]
});

/**
 * First, load bundle, then launch the app.
 *
 * In dev builds, bundle is an empty text file, and every js file is loaded
 * from source.  In production builds, though, all the modules in the app are
 * packaged up into bundle.js.  Once bundle.js has loaded, it registers every
 * module with RequireJS (via define() calls).  No nasty if/then template
 * replacement cruft needed.  Woot!
 */

require(['bundle'], function () {
    require(['app']);
});
