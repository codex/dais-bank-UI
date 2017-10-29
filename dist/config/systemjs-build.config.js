/* eslint-disable quote-props */

System.config({
    transpiler: 'plugin-babel',
    baseURL: 'dais-bank-UI',
    paths: {
        'plugin-babel': 'dev/libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'dev/libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        'jquery': 'dev/libs/jquery.min.js',
        'handlebars': 'dev/libs/handlebars.min.js',
        'app': 'dev/app/app.js',
        'model': 'dev/app/data.js',
        'home-controller': 'dev/app/home.controller.js',
        'layout-controller': 'dev/app/layout.controller.js',
        'view-handler': 'dev/app/view-handler.js',
    },
    packages: {
        '/': {
            defaultExtension: 'js',
        },
    },
});
