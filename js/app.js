const { createApp } = Vue

// console.log(axios)

createApp({
    data() {
        return {
            message: 'itopinonavevanonipoti',
            email:'',
        }
    },
    methods: {
        fetchEmail() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((responseEmail) => {
                        const randomEmail = responseEmail.data.response
                        this.email = randomEmail
                        console.log('questa è la mail random', this.email)
                    }
                )
        },

    },
    created() {
        this.fetchEmail()
    }

}).mount('#app')

axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((resp) => {
        console.log(resp.data.response)
    })