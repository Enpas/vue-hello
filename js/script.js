// inizializzo vue 
const app = new Vue({

  el: '#app',

  // creo la sezione variabili
  data: {
    messaggio: 'Ciao Vue!',
    classe: '',
    ricercaImg: 'img/panorama con albero.jpg',
    input: '',
    txt: ''
  },


  // creo la sezione funzioni
  methods: {

    // creo la funzione per cambiare colore
    cambiaColore(classe) {
      this.classe = classe;
    },

    // creo la funzione per modificare il testo
    inputTesto() {
      this.messaggio = this.txt;
      this.txt = '';
    },

    // creo la funzione per modificare il colore inserendolo nell'input
    inputColore() {
      this.classe = this.input;
      this.input = '';
    }

  }

}); 