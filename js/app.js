const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'itopinonavevanonipoti',
            email: '',
            arrayEmails: [],
        }
    },
    methods: {
        fetchEmail() {

            // chiedere al server di generare un'email random per 10 volte
            for (let i = 0; i < 10; i++) {

                // chiedere al server di generare un'email random
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((responseEmail) => {
                    const randomEmail = responseEmail.data.response
                    this.email = randomEmail
                    console.log('questa è la mail random', this.email)

                    // push dell'indirizzo email nell'array
                    this.arrayEmails.push(randomEmail)
                })
            }
        },
    },
    created() {
        this.fetchEmail()
    }
}).mount('#app')