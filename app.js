const app = Vue.createApp({
    data() {
        return {
            BTCUSD: '-',
            BTCEUR: '-',
            BTCCAD: '-',
            ETHUSD: '-',
            ETHEUR: '-',
            ETHCAD: '-'
        }
    },

    methods: {
        formatPrice(value) {
            if (value == '-') return value
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        async getBitcoinPrice() {
            const result = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR,CAD&api=726759b7ea67c89d05467916a56440c04b5ac563d9bdd48639fbd772503f6d04')
            const results = await result.json()
            this.BTCUSD = results.USD,
            this.BTCEUR = results.EUR,
            this.BTCCAD = results.CAD
        },

        async getEthereumPrice() {
            const result = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,CAD&api=726759b7ea67c89d05467916a56440c04b5ac563d9bdd48639fbd772503f6d04')
            const results = await result.json()
            this.ETHUSD = results.USD,
            this.ETHEUR = results.EUR,
            this.ETHCAD = results.CAD
        }
    }
})

app.mount('#bitcoin')
