/* globals $ */

const mainControls = {

    init() {
        return this.getData()
            .then(() => this.cacheDom())
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
                return fetchTemplate('accounts', this.data.accounts);
            })
            .then((html) => {
                // intial template
                this.$controlsContent.html(html);
            });
    },

    render() {
        $('.bucket').html(this.$html);
    },

    attachEvents() {
        this.$control.on('click', this.navigation.bind(this));
        this.$controlsContent.on('click', this.subNavigation.bind(this));
    },

    getData() {
        this.data = data;
        return Promise.resolve(this.data);
    },

    navigation(e) {
        e.preventDefault();
        const $currentTarget = $(e.currentTarget);
        const template = $currentTarget.data('template');
        $('.main-controls__item--active').removeClass('main-controls__item--active');
        $currentTarget.addClass('main-controls__item--active');
        fetchTemplate(template, data[template])
            .then((html) => {
                this.$template = $(html);
                this.$controlsContent.html(this.$template);
            });
    },

    subNavigation(e) {
        e.preventDefault();
        const $target = $(e.target);
        const type = $target.data('type');

        if ($target.hasClass('controllers-item')) {
            $('.controllers-item--active').removeClass('controllers-item--active');
            $target.addClass('controllers-item--active');
        }

        if ($('.accounts-section')) {
            const $transactions = $('.transactions');
            const $accounts = $('.accounts');

            if (type === 'transactions') {
                $accounts.hide();
                $transactions.fadeIn(500);
            }

            if (type === 'accounts') {
                $transactions.hide();
                $accounts.fadeIn(500);
            }
        }

        if ($('.transfer-section')) {
            const $transfers = $('.transfers');
            const $payments = $('.payments');

            if (type === 'transfers') {
                $payments.hide();
                $transfers.fadeIn(500);
            }

            if (type === 'payments') {
                $transfers.hide();
                $payments.fadeIn(500);
            }
        }
    },


};
