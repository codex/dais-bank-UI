/* globals $ Handlebars */

function fetchTemplate(template, viewData = null) {
    return $.get(`templates/${template}.hbs`)
        .then((hbs) => {
            const html = Handlebars.compile(hbs);
            return html(viewData);
        });
}
