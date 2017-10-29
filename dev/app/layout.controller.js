import $ from 'jquery';
import fetchTemplate from 'view-handler';

const layoutController = {

    init() {
        return this.cacheDom()
            .then(() => {
                this.render();
            });
    },

    cacheDom() {
        return fetchTemplate('layout')
            .then((html) => {
                this.$html = $(html);
            });
    },

    attachEvents() {

    },

    render() {
        $('body').html(this.$html);
    },

};

export default layoutController;
