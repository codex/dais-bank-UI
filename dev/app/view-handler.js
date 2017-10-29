import $ from 'jquery';
import Handlebars from 'handlebars';

const fetchTemplate = (template, viewData = null) =>
    $.get(`views/${template}.hbs`)
        .then((hbs) => {
            const html = Handlebars.compile(hbs);
            return html(viewData);
        });

export default fetchTemplate;
