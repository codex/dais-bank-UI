/* globals $ */

const layout = {

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

