/* globals $ */

const mainControls = {

    init() {
        return this.cacheDom()
            .then(() => {
                this.attachEvents();
                this.render();
            });
    },

    cacheDom() {
        return fetchTemplate('home')
            .then((html) => {
                this.$html = $(html);
                this.$control = this.$html.find('.main-controls__item');
                this.$controlsContent = this.$html.find('.controls-content');
                return fetchTemplate('accounts');
            })
            .then((html) => {
                this.$controlsContent.html(html);
            });
    },

    render() {
        $('.bucket').html(this.$html);
    },

    attachEvents() {
        this.$control.on('click', this.navigate.bind(this));
    },

    navigate(e) {
        e.preventDefault();
        const $currentTarget = $(e.currentTarget);
        const template = $currentTarget.data('template');
        $('.main-controls__item--active').removeClass('main-controls__item--active');
        $currentTarget.addClass('main-controls__item--active');
        fetchTemplate(template)
            .then((html) => {
                this.$template = $(html);
                this.$controlsContent.html(this.$template);
            });
    },


};
