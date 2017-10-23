Vue.component('tweet', {
    template: '#tweet-template',
    props: ['tweet'],
    methods: {
        like() {
            this.tweet.likes++
        }
    },
    computed: {
        avatar() {
            return `https://gravatar.com/avatar/${md5(this.tweet.email)}`
        }
    }
})

let vm = new Vue({
    el: '#app',
    data: {
        newTweet: '',
        tweets: [{
            name: "Robert O'Leary",
            username: "@night-blade",
            email: "ole_rowi@yahoo.com",
            tweet: "VueJS is Amazing!",
            date: "Oct 18",
            likes: 1
        }, {
            name: "Bec Braughton",
            username: "@beckton",
            email: "bec.braughton@gmail.com",
            tweet: "Sup",
            date: "Just now",
            likes: 1000000
        }]
    },
    computed: {
        remainingCharacters() {
            return 140 - this.newTweet.length
        }
    },
    methods: {
        like(tweet) {
            tweet.likes++
        },
        tweet() {
            this.tweets.unshift({
                name: "Bec Braughton",
                username: "@beckton",
                email: "bec.braughton@gmail.com",
                tweet: this.newTweet,
                date: "Just now",
                likes: 0
            })
            this.newTweet = ''
        }
    },
    filters: {
        avatar(email) {
            return `https://gravatar.com/avatar/${md5(email)}`
        }
    },
    // watch: {
    //     newTweet: function (newValue, oldValue) {
    //         let increasedBy = newValue.length - oldValue.length

    //         alert('Tweet increased by ' + increasedBy + ' characters')
    //     }
    // }
})