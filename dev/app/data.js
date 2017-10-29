const model = {
    data: {
        transactions: [
            {
                date: '02.10.2017',
                amount: 130,
                currency: 'BGN',
                type: 'Debit',
                description: 'Latest WoW Expansion',
            },
            {
                date: '07.10.2017',
                amount: 40,
                currency: 'BGN',
                type: 'Debit',
                description: 'Groceries for dinner',
            },
            {
                date: '10.10.2017',
                amount: 45,
                currency: 'BGN',
                type: 'Debit',
                description: '3 tickets for the SW Last Jedi',
            },
            {
                date: '11.10.2017',
                amount: 96,
                currency: 'BGN',
                type: 'Debit',
                description: 'Brakepads, can of DOT4',
            },
            {
                date: '16.10.2017',
                amount: 210,
                currency: 'BGN',
                type: 'Debit',
                description: 'AudioTechnica Headset',
            },
        ],

        accounts: [

            {
                id: '103305699043321 BGN',
                name: 'Kamen Kamenov',
                balance: '20,453.00 BGN',
                available: '20,453.00 BGN',
            },
            {
                id: '102233267403321 BGN',
                name: 'Kamen Kamenov',
                balance: '666.00 BGN',
                available: '666.00 BGN',
            },
            {
                id: '113205428045488 USD',
                name: 'Kamen Kamenov',
                balance: '190,453.00 USD',
                available: '10,000.00 USD',
            },
        ],

        cards: [
            {
                type: 'International Debit Card',
                balance: '190,453.00 USD',
                available: '10,000.00 USD',
            },
        ],
    },

    fetchData() {
        return Promise.resolve(this.data);
    },
};

export default model;
