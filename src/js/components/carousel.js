// Só funciona 1 componente por página
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "src/img/slide1.webp",
          alt: "Adolescente no ambiente escolar",

          
          html://html 
            `
            <p
                >
                  As mudanças educacionais têm revelado uma crescente
                  preocupação com a realidade escolar e o desenvolvimento de
                  habilidades emocionais, também conhecidas como soft skills.
                  <br /> <br />
                  Essas transformações também se direcionam à formação de perfis
                  que incentivem o uso crítico, eficiente, ético e seguro das
                  tecnologias digitais.
                </p>
            `,
        },
        {
          id: 2,
          img: "src/img/slide2.webp",
          alt: "Adolescente no ambiente escolar",

          
          html://html 
            `
            <p>
                  Essas habilidades integram um movimento de transformação que
                  visa desenvolver uma forma de pensar e agir que contribua para
                  o progresso da sociedade, além de proporcionar uma preparação
                  mais sólida dos estudantes para o mercado de trabalho.
                </p>
            `,
        },
        
      ],
      instances: null, // Declare instances as a reactive variable
      qtdSlides: 0,
      ordem: 1,
    };
  },
  methods: {
    next() {
      document.querySelector(".previous").style.display = "flex";
      this.instances[0].next(); // Access the first carousel instance
    },
    previous() {
      this.instances[0].prev();
    }
  },
  mounted() {
    var elems = document.querySelectorAll(".carousel");
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      onCycleTo: (slide) => {
        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.ordem = slideIndex;


        // Se for o primeiro slide, não mostrar o botão anterior
        if(this.ordem == 1){
          document.querySelector(".previous").style.display = "none";

        }
        // console.log("Current slide:", this.ordem);
      },
    });
    // this.qtdSlides = this.instances[0].count; // Set qtdSlides after initialization
    document.querySelector(".previous").style.display = "none";
  },

  
  template://html 
  `
    <!-- Carousel -->
    <div class="p-24 carousel carousel-slider carousel-02 center">
      <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="btn btn-game previous flex--align-center card card--purple-shadow">
        <img src="./src/img/play_l.svg" alt="Esquerda" loading="lazy" style="width: 100%; max-width: 12px" />

        </a>
        <a @click="next" class="btn btn-game btn-game--gray next flex--align-center card ml-16 card--purple-shadow">
        <img src="./src/img/play_r.svg" alt="Direita" loading="lazy" style="width: 100%; max-width: 12px" />

        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
          <img :src="item.img" :alt="item.alt" class="col s12 m6 img--round">
          <div class="col s12 m6 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
