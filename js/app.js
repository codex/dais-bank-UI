/* globals $ mainControls Handlebars */

$(() => {
    layout.init()
        .then(() => {
            mainControls.init();
        });
});

