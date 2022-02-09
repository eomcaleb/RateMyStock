const app = Vue.createApp({
    data() {
        return {
            BTCUSD: '',
            BTCJPY: '',
            BTCCAD: '',
            ETHUSD: '',
            ETHJPY: '',
            ETHCAD: ''
        }
    },

    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        async getBitcoinPrice() {
            const result = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,CAD&api=726759b7ea67c89d05467916a56440c04b5ac563d9bdd48639fbd772503f6d04')
            const results = await result.json()
            this.BTCUSD = results.USD,
            this.BTCJPY = results.JPY,
            this.BTCCAD = results.CAD
        },

        async getEthereumPrice() {
            const result = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,CAD&api=726759b7ea67c89d05467916a56440c04b5ac563d9bdd48639fbd772503f6d04')
            const results = await result.json()
            this.ETHUSD = results.USD,
            this.ETHJPY = results.JPY,
            this.ETHCAD = results.CAD
        }
    }
})

app.mount('#bitcoin')
