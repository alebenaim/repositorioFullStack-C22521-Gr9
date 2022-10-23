const { createApp } = Vue

createApp({
data() {
    return {
    url:'https://yohana-olivera.github.io/ale/catalogo.json' ,
    catalogo: []
    }
},
    methods: {
    fetchData(url) {

        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.catalogo=data // datos del catalogo
                console.log(this.catalogo)
            })

    }
},
    created(){

    this.fetchData(this.url) 
}

}).mount('#app')