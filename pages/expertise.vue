<template>
  <div id="expertise">
    <!--SCROLLBAR LEFT-->
    <div
      class="scrollBar fixed w-0.5 h-10 left-14 top-1/2 bg-primary rounded overflow-hidden"
    ></div>
    <!--ROTATING CIRCLE TEXT -->
    <img
      src="@/assets/icons/circleText.svg"
      alt="circle text"
      class="circleText w-32 fixed top-20 left-40 opacity-0"
    />
    <!--BACK TILES IMAGES -->
    <div
      class="back-expertise fixed h-screen top-0 right-0 w-2/6 col-span-1 overflow-hidden opacity-50 md:opacity-100"
    >
      <div class="back-wrapper">
        <ul class="backlist flex row">
          <li class="w-1/2 mr-2">
            <div class="graphisme w-full mb-2 block">
              <img
                v-for="(poster, index) in graphisme"
                :key="index"
                class="w-full mb-2 block"
                :src="poster.path"
                alt="poster"
              />
            </div>
          </li>
          <li class="w-1/2 mr-2">
            <div class="web w-full mb-2 block">
              <img
                v-for="(poster, index) in web"
                :key="index"
                class="w-full h-auto mb-2 block"
                :src="poster.path"
                alt="poster"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <section class="expertise grid grid-cols-3">
      <div class="list-expertise col-span-2 pb-20">
        <div class="list-wrapper flex flex-col items-end">
          <!--TITLE INTRO -->
          <section
            class="introexpertise w-full md:w-5/6 pl-5 md:pl-0 min-h-full h-screen flex flex-col items-start justify-center"
          >
            <p class="p-first font-text text-main text-base">L'esprit</p>
            <h1
              class="font-title text-primary text-6xl font-bold flex flex-col my-6"
            >
              <span class="mb-3">Collectif</span>
              <span class="mb-3">Analytique</span>
              <span class="mb-3">Créatif</span>
            </h1>
            <p class="p-second outil font-text text-main text-base flex">
              est l'outil le plus puissant d'un Designer
              <img
                src="@/assets/icons/brain.svg"
                alt="bol de céreales "
                class="h-6 ml-3"
              />
            </p>
          </section>
          <!--SECTION SKILLS -->
          <section
            v-for="(domain, index) in expertise"
            :key="index"
            :class="domain.class"
            class="skill relative w-full pl-5 md:pl-0 md:w-5/6 min-h-60% mb-20 py-36 border-b border-solid border-primary border-opacity-30 overflow-hidden"
          >
            <h2 class="font-title text-primary text-4xl md:text-6xl font-bold">
              {{ domain.name }}
            </h2>

            <h3 class="font-text text-main text-base mt-3 w-5/6 md:w-3/5">
              {{ domain.description }}
            </h3>
            <p
              class="font-text text-primary transform uppercase text-2xl md:text-6xl font-light italic absolute bottom-5 inline-flex whitespace-nowrap"
            >
              {{ domain.span }}
            </p>
          </section>
        </div>
      </div>
    </section>
    <!--LOTTIES FILES -->
    <div
      class="lotties fixed top-0 right-0 z-20 w-2/6 h-full flex items-center justify-center"
    >
      <div class="lottie-wrapper relative h-full w-full">
        <lottie
          :options="lotties.da"
          class="lottie bg-white absolute top-1/2 -right-full transform -translate-x-1/2 -translate-y-1/2 rotate-3 rounded shadow p-10 opacity-0"
          @animCreated="handleAnimation"
        />
        <lottie
          :options="lotties.ux"
          class="lottie bg-white absolute top-1/2 -right-full transform -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded shadow p-10 opacity-0"
          @animCreated="handleAnimation"
        />
        <lottie
          :options="lotties.ui"
          class="lottie bg-white absolute top-1/2 -right-full transform -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded shadow p-10 opacity-0"
          @animCreated="handleAnimation"
        />
        <lottie
          :options="lotties.ui"
          class="lottie bg-white absolute top-1/2 -right-full transform -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded shadow p-10 opacity-0"
          @animCreated="handleAnimation"
        />
        <lottie
          :options="lotties.ui"
          class="lottie bg-white absolute top-1/2 -right-full transform -translate-x-1/2 -translate-y-1/2 rotate-3 rounded shadow p-10 opacity-0"
          @animCreated="handleAnimation"
        />
      </div>
    </div>
    <!--FOOTER -->
    <section class="h-footer box-border overflow-hidden relative">
      <!-- <Particles /> -->
      <nuxt-link
        to="/projets"
        class="pageLink link h-1/2 mt-28 relative flex flex-col justify-center box-border font-text text-primary font-light text-7xl text-center"
      >
        Découvrez <span class="font-title italic"> mes Projets</span>
      </nuxt-link>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "/components/footer";
// import Particles from "/components/particles";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import lottie from "vue-lottie/src/lottie.vue";
import * as ux from "assets/animation/UX.json";
import * as ui from "assets/animation/Ui.json";
import * as da from "assets/animation/DA.json";

export default {
  name: "Expertise",
  components: {
    lottie,
    Footer
    // Particles
  },
  scrollToTop: true,
  transition: {
    mode: "out-in",
    css: false,
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transition = "all 1s linear";
    },
    enter(el, done) {
      //TITLE INTRO ANIMATION
      el.style.opacity = 1;
      let inT = gsap.timeline({ delay: 0.5 });
      inT
        .from(".p-first", {
          y: -20,
          autoAlpha: 0,
          ease: "Power3.easeOut"
        })
        .from(".introexpertise h1 span", {
          autoAlpha: 0,
          y: -20,
          skewX: -10,
          stagger: {
            each: 1
          }
        })
        .from(".p-second", {
          autoAlpha: 0,
          scale: 0.9,
          duration: 1,
          ease: "Power3.easeOut",
          onComplete: done
        });
      done();
    },
    leave(el, done) {
      done();
    }
  },
  data() {
    return {
      //LOTTIES FILES
      lotties: {
        da: {
          class: "ux",
          animationData: da.default,
          loop: true,
          autoplay: false
        },
        ux: {
          class: "ux",
          animationData: ux.default,
          loop: true,
          autoplay: false
        },
        ui: {
          class: "ui",
          animationData: ui.default,
          loop: true,
          autoplay: false
        }
      },
      //BACK TILES IMAGES
      graphisme: [
        {
          path: require("@/assets/img/tiles/poster3.png")
        },
        {
          path: require("@/assets/img/tiles/web14.jpg")
        },
        {
          path: require("@/assets/img/tiles/web1.png")
        },
        {
          path: require("@/assets/img/tiles/poster2.jpg")
        },
        {
          path: require("@/assets/img/tiles/web2.jpg")
        },
        {
          path: require("@/assets/img/tiles/poster1.jpg")
        },

        {
          path: require("@/assets/img/tiles/web3.png")
        },

        {
          path: require("@/assets/img/tiles/poster4.jpg")
        },
        {
          path: require("@/assets/img/tiles/web12.png")
        },
        {
          path: require("@/assets/img/tiles/mural1.jpeg")
        },
        {
          path: require("@/assets/img/tiles/web5.png")
        },
        {
          path: require("@/assets/img/tiles/web6.png")
        },
        {
          path: require("@/assets/img/tiles/poster5.png")
        }
      ],
      web: [
        {
          path: require("@/assets/img/tiles/web7.png")
        },
        {
          path: require("@/assets/img/tiles/poster6.png")
        },
        {
          path: require("@/assets/img/tiles/web8.png")
        },
        {
          path: require("@/assets/img/tiles/poster7.png")
        },
        {
          path: require("@/assets/img/tiles/web9.png")
        },
        {
          path: require("@/assets/img/tiles/poster8.png")
        },
        {
          path: require("@/assets/img/tiles/web10.png")
        },
        {
          path: require("@/assets/img/tiles/poster9.png")
        },
        {
          path: require("@/assets/img/tiles/web11.png")
        },
        {
          path: require("@/assets/img/tiles/mural2.jpeg")
        },
        {
          path: require("@/assets/img/tiles/web4.png")
        },
        {
          path: require("@/assets/img/tiles/web13.jpg")
        }
      ],
      //ARRAY OF SECTIONS SKILLS
      expertise: [
        {
          name: "Direction Artistique",
          span:
            "Branding - Charte graphique - Logo - Identité de marque - Campagne marketing - Lancement de produit",
          class: "DA",
          description:
            "Prendre des idées afin de les matérialiser en véritable positionnement de marque, une image désirable avec un message mémorable"
        },
        {
          name: "Expérience Utilisateur",
          span:
            "Design thinking - Ateliers de coconception - Design sprint - Interview - Ergonomie Web - Persona",
          class: "UX",
          description:
            "L’intelligence collective pour comprendre & optimiser l’expérience de vos utilisateurs à travers des ateliers, selon des methodes et des process adaptés"
        },
        {
          name: "Design d'Interfaces",
          span:
            "Catalogue - Ecommerce - Logiciel - Application - Site évènementiel - Webdesign - Maquettes - Prototypes intéractifs",
          class: "UI",
          description:
            "Concevoir & décliner des interfaces digitales cohérentes selon des codes graphiques & des règles fonctionnelles définies"
        },
        {
          name: "Communication Visuelle",
          span:
            "Graphisme - Illustration - Supports marketing - Publicité - Pao - Réseaux sociaux - Motion Design",
          class: "CV",
          description:
            "Valoriser et communiquer votre identité de marque sur différentes plateformes et supports"
        },

        {
          name: "Développement Front",
          span:
            "Framework - Animation - Intéraction - Site Vitrine - Responsive",
          class: "DF",
          description:
            "Développer les interfaces de votre projet, créer une expérience intéractive et immersive, tout en veillant à sa performance technique"
        }
      ]
    };
  },
  head() {
    return {
      titleTemplate: "%s - Expertise",
      meta: [
        {
          name: "Expertise",
          content:
            "Direction Artistique, Expérience utilisateur, Design d'interfaces, Communication Visuelle, Développement Front "
        }
      ]
    };
  },
  mounted() {
    //FOOTER TRIGGER HIDE
    const FooterBottom = gsap.timeline({
      scrollTrigger: {
        trigger: ".h-footer",
        start: "top center",
        end: "center center",
        scrub: true,
        toggleActions: "play none reverse reverse"
      }
    });
    FooterBottom.to(".back-expertise", { xPercent: 110 })
      .to(
        ".lotties",
        {
          autoAlpha: 0
        },
        "<"
      )
      .to(
        ".scrollBar",
        {
          autoAlpha: 0
        },
        "<"
      )
      .to(
        ".circleText",
        {
          autoAlpha: 0
        },
        "<"
      );

    //FOOTER BANNER CEREAL
    // function addImg() {
    //   const cereal = document.querySelector(".cereal");
    //   const count = 50;
    //   for (let i = 0; i < count; i++) {
    //     const imgFlake = document.createElement("IMG");
    //     imgFlake.src = require("~/assets/icons/flake.png");
    //     imgFlake.style.width = "40px";
    //     var spin = Math.round(Math.random() * 180);
    //     imgFlake.style.transform = "rotate(" + spin + "deg)";
    //     cereal.appendChild(imgFlake);
    //   }
    // }
    // addImg();

    //BACK TILE ANIMATION
    let backTile = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ScrollTrigger: {
        trigger: ".introexpertise",
        start: "top top"
      }
    });
    backTile
      .set(".graphisme", { transformOrigin: "top center", yPercent: -50 })
      .to(
        ".graphisme",
        {
          yPercent: 0,
          duration: 120,
          ease: "none"
        },
        "<"
      )
      .to(
        ".web",
        {
          yPercent: -50,
          duration: 120,
          ease: "none"
        },
        "<"
      );

    //LISTE EACH EXPERTISE ILLUSTRATIONS ANIMATION
    const lotties = document.querySelectorAll(".lottie");
    const anims = [da, ux, ui, ui, ui];
    gsap.utils.toArray(".skill").forEach((el, i) => {
      let SkillAnim = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none play reset",
          onEnter: () => {
            this.playLottie(anims[i]);
          }
        }
      });
      SkillAnim.from(el, { autoAlpha: 0, y: 20 })
        .to(el, { autoAlpha: 1, y: 0 })
        .to(
          lotties[i],
          {
            right: "-10%",
            autoAlpha: 1,
            duration: 1
          },
          "<"
        );
    });

    //CIRCLE TEXT ROTATE ANIMATION

    const circleText = gsap.timeline({
      scrollTrigger: {
        trigger: ".introexpertise",
        start: "bottom center",
        end: "10000",
        scrub: true
      }
    });
    circleText
      .to(".circleText", { autoAlpha: 1 })
      .to(".circleText", { rotate: "360deg", duration: 10 }, "<");
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    playLottie: function() {
      this.anim.play(0);
    },
    stopLottie: function() {
      this.anim.stop(0);
    }
  }
};
</script>
