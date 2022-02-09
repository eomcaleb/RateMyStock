const app = Vue.createApp({
    data() {
        return {
            USD: '',
            JPY: '',
            CAD: ''
        }
    },

    methods: {
        async getPrice() {
            const result = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,CAD&api=726759b7ea67c89d05467916a56440c04b5ac563d9bdd48639fbd772503f6d04')
            const results = await result.json()

            this.USD = results.USD,
            this.JPY = results.JPY,
            this.CAD = results.CAD

            console.log("You clicked me")
        }
    }
})

app.mount('#app')
