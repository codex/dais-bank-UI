/* eslint-disable quote-props */

System.config({
    transpiler: 'plugin-babel',
    baseURL: '/',
    paths: {
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        'jquery': 'libs/jquery.min.js',
        'handlebars': 'libs/handlebars.min.js',
        'app': 'app/app.js',
        'model': 'app/data.js',
        'home-controller': 'app/home.controller.js',
        'layout-controller': 'app/layout.controller.js',
        'view-handler': 'app/view-handler.js',
    },
    packages: {
        '/': {
            defaultExtension: 'js',
        },
    },
});
