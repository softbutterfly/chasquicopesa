<template>
    <v-app class="page">
        <v-card class="toolbar-container fixed" id="toolbar-container">
            <v-toolbar black id="toolbar">
                <v-spacer></v-spacer>
                <template v-for="(section, sectionId) in content.sections">
                  <v-toolbar-items class="hidden-sm-and-down" v-if="section.includeInMenu" :key="section.title" @click="scrollTo(sectionId)">
                    <v-btn flat :ripple="false" >{{ section.title }}</v-btn>
                  </v-toolbar-items>
                </template>
                <v-menu close-on-content-click offset-y transition="slide-y-transition" class="hidden-md-and-up">
                    <v-toolbar-side-icon :ripple="false" slot="activator"></v-toolbar-side-icon>                    
                    <v-list>
                        <template v-for="(section, sectionId) in content.sections">
                          <v-list-tile v-if="section.includeInMenu"  :key="section.title" @click="scrollTo(sectionId)">
                            <v-list-tile-title v-text="section.title"></v-list-tile-title>
                          </v-list-tile>
                        </template>
                    </v-list>
                </v-menu>
            </v-toolbar>
        </v-card>

        <div ref="home" id="home" class="ch-section">
            <v-carousel hide-controls>
                <v-carousel-item
                v-for="(item,i) in content.home.carousel.items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
        </div>
        <div ref="about" id="about" class="nosotros">
            <div id="mision" class="ch-section mision">
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-12">
                    <div class="tile" style="align-items: center;">
                      <div class="tile is-parent is-vertical" style="padding: 0 90px;">
                        <article class="tile is-child" style="min-width: 240px;">
                            <h3 class="simple-title title is-3">MISIÓN</h3>
                            <div class="text-content">
                                Somos una empresa Courier que brinda servicios de mensajería a nivel local y nacional, 
                                garantizando un servicio de calidad y eficiencia en los tiempos establecidos, 
                                logrando así, superar las expectativas de nuestros clientes.
                            </div>
                        </article>
                      </div>
                      <div class="tile is-parent" style="padding:0px; flex-basis: auto; max-width: 900px;">
                        <article class="tile is-child">
                          <figure class="image">
                            <img :src="assets.ChasquiMision">
                          </figure>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>  
            </div>
            <div id="vision" class="ch-section vision">
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-12">
                    <div class="tile" style="align-items: center;">
                      <div id="first-order" class="tile is-parent" style="padding:0px; flex-basis: auto; max-width: 900px;">
                        <article class="tile is-child">
                          <figure class="image">
                            <img :src="assets.ChasquiVision">
                          </figure>
                        </article>
                      </div>
                      <div id="second-order" class="tile is-parent is-vertical" style="padding: 0 90px;">
                        <article class="tile is-child" style="min-width: 240px;">
                            <h3 class="simple-title title is-3">VISIÓN</h3>
                            <div class="text-content">
                                Ser reconocida como la empresa Courier más confiable para entidades públicas y privadas,
                                otorgando soluciones logísticas y de comunicación con la mayor cobertura a nivel nacional
                                e internacional, manteniendo nuestro compromiso con los valores que reflejamos día a día,
                                contribuyendo así al desarrollo del país con más puestos de trabajo.
                            </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>               
            </div>
        </div>
        <div class="chasqui-parallax">
            <v-parallax height="400" :src="assets.ChasquiParallax"></v-parallax>
        </div>
        <!--<div ref="services" id="services" class="ch-section">
            <v-container>
                <div class="columns">
                    <div class="column is-two-fifths">
                        <div class="chasqui-title">
                            <h3 class="simple-title title is-3">NUESTROS</h3>
                            <h3 class="simple-title title is-3">SERVICIOS</h3>
                        </div>
                        <div class="text-content">
                            Contamos con personal calificado y una red de representantes a nivel local
                            y nacional logrando realizar las entregas en el momento oportuno y con la mayor cobertura,
                            con compromiso y ética, las cuales son características únicas del servico de nuestra empresa.
                            <p style="margin-top:1rem;">Nuestros servicios son:</p>
                        </div>
                        <div class="services columns">
                            <div class="columns vertical-centering">
                                <div class="service-number column is-3">
                                    <p>01</p>
                                </div>
                                <div class="service-icon column is-4">
                                    <img src="./assets/images/service-icon1.svg" alt="">
                                </div>
                                <div class="service-title column is-5">
                                    <a href="">Servicios in house</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="services columns">
                            <div class="columns vertical-centering">
                                <div class="service-number column is-3">
                                    <p>02</p>
                                </div>
                                <div class="service-icon column is-4">
                                    <img src="./assets/images/service-icon2.svg" alt="">
                                </div>
                                <div class="service-title column is-5">
                                    <a href="">Servicios de motorizados</a>
                                </div>
                            </div>
                        </div>
                        <div class="services columns">
                            <div class="columns vertical-centering">
                                <div class="service-number column is-3">
                                    <p>04</p>
                                </div>
                                <div class="service-icon column is-4">
                                    <img src="./assets/images/service-icon4.svg" alt="">
                                </div>
                                <div class="service-title column is-5">
                                    <a href="">Servicios de Courier (Inmediato)</a>
                                </div>
                            </div>
                        </div>
                        <div class="services columns">
                            <div class="columns vertical-centering">
                                <div class="service-number column is-3">
                                    <p>06</p>
                                </div>
                                <div class="service-icon column is-4">
                                    <img src="./assets/images/service-icon6.svg" alt="">
                                </div>
                                <div class="service-title column is-5">
                                    <a href="">Servicios de digitalización</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="services columns">
                            <div class="columns vertical-centering">
                                <div class="service-number column is-3">
                                    <p>03</p>
                                </div>
                                <div class="service-icon column is-4">
                                    <img src="./assets/images/service-icon3.svg" alt="">
                                </div>
                                <div class="service-title column is-5">
                                    <a href="">Servicios de recojo y entrega de valijas</a>
                                </div>
                            </div>
                        </div>
                        <div class="services columns">
                            <div class="columns vertical-centering">
                                <div class="service-number column is-3">
                                    <p>05</p>
                                </div>
                                <div class="service-icon column is-4">
                                    <img src="./assets/images/service-icon5.svg" alt="">
                                </div>
                                <div class="service-title column is-5">
                                    <a href="">Servicios de mensajería (Masivo) </a>
                                </div>
                            </div>
                        </div>
                        <div class="services columns">
                            <div class="columns vertical-centering">
                                <div class="service-number column is-3">
                                    <p>07</p>
                                </div>
                                <div class="service-icon column is-4">
                                    <img src="./assets/images/service-icon7.svg" alt="">
                                </div>
                                <div class="service-title column is-5">
                                    <a href="">Servicios de digitalizado</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
        </div>-->
    <!--<ch-sample/>-->
    <ch-footer/>
    <!--<template v-for="(section, i) in sections">
        <ch-section-ltr v-if="section.type == 'ltr'" :content="section"  :key="section.id" />
        <ch-section-rlt v-else-if="section.type == 'rlt'" :content="section"  :key="section.id"/>
        <div v-else :key="i">No hay secciones :'( </div>
        </template>-->
    </v-app>
</template>

<style lang="less">
/*
Chasqui-colors
#5A7C37 -------------- GREEN
#006737 -------------- LIGHT GREEN
#EFAB1E -------------- YELLOW
#E8664A -------------- RED
#0062AA -------------- BLUE
*/
*,
*:hover,
*:focus,
*:active {
  outline: none;
}

*::-moz-focus-inner {
  border: 0;
}

html,
body.page-wrapper {
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

.page {
    background-color: #ffffff!important;
  /*--------- TOOLBAR & MENU ---------*/
    .v-menu__content {
        position: fixed;
        top: 128px!important;
        top:128px;
        right: 0;
        width: 100%!important;
        left: 0!important;
        max-width: 100%;
        border-radius: 0px;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
        
        &.menuable__content__active {
            width: 100%!important;
            min-width: 100%!important;
            top: 128px!important;
            transform-origin: none!important;
            z-index: 99!important;
            position: fixed!important;

            .v-toolbar__content {
            background-color: #fff!important;
            }
        }
    }

    .v-toolbar {
        height: inherit;
        /*background-color: transparent!important;*/
        background-color: #2E2E2E;
        position: fixed!important;
        z-index: 9999999!important;
        box-shadow:none;
        transition: background-color 0.2s linear;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

        &.solid-toolbar {
            background-color: #2E2E2E;
            transition: background-color 0.2s linear;
        }
    
        .v-toolbar__content {
            height: 128px!important;
            width: 100%;
            transition: all .5s ease-in-out;

            .v-btn{
                min-width: 130px;
                font-family: Lato;
                font-weight: bold;
                color: white;
                &:before {
                    opacity: 0;
                }
                .v-btn__content {
                    &:hover {
                        color:#0062AA;
                    }
                }
            }
        }
    }
}

div#first-order {order: 1;}
div#second-order {order: 2;}

    .ch-section {
        margin: 64px 0;

        .vertical-centering {
            display: flex;
            align-items: center;
        }
        .section-wrapper {
            margin:0;
            padding: 0;
        }
        .section-content {
            position: relative;
            top: 200px;
            height: fit-content;
            padding: 0 90px;
        }

        .image {
            padding: 0;
            &.tile.is-parent {
                padding:0;
            }
        }
        .simple-title {
            margin-bottom: 24px;
        }
        .tile.is-ancestor {
            margin: 0;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .display-flex {
            display:flex;
        }

        &#home {
            margin: 0;
            .v-carousel{
                box-shadow: none;
                height: 100vh;
                .v-carousel__controls {
                padding-right: 137px;
                background: none;
                bottom: 0;
                right:0;
                display: flex;
                left: auto;
                flex-direction: column;
                height: inherit;
                width: auto;
                }
                .v-jumbotron__image {
                    height: auto;
                    top: 0;
                    left: 0;
                    transform: translate(0,0);

                }
            }
        }
        &#mision {
            .section-content {
                text-align: right;
            }
        }
        &vision {
            .section-content {
                text-align: left;
            }
        }
        &#services {
            .columns {
                margin:0;
            }
            .services {
                &.columns {
                    justify-content: center;
                    .service-number{
                        p {
                            margin: 0;
                            cursor: default;
                            color: #EFAB1E;
                            font-weight: bold;
                            font-size: 36px;
                        }
                    }
                    .service-icon {
                        img {
                            display: block;
                            height: auto;
                        }
                    }
                    .service-title>a {
                        font-size: 16px;
                        color: black;
                        &:hover {
                            text-decoration: none;
                            border-bottom: 2px solid #EFAB1D;
                        }
                    }
                }
            }

        }
        &#contact {
            .ch-text-field,.ch-textarea {
                display:flex;
            }
            label {
                text-align: left;
            }
            input.input[type="email"] {
                height: auto;
            }
            input, .textarea {
                width: 65%;
                &:focus, &:active {
                    border: 2px solid #EFAB1E;
                    box-shadow: none;
                }
                &.input.vertical-centering {
                    height: auto;
                }
            }
            .textarea {
                height: auto;
                max-width: 65%;
                min-width: 65%;
                resize: none;
            }
            #location {
                .map {
                    min-width: 100%;
                    height: auto;
                }
            }
        }
    }

</style>

<script>

import ChasquiArequipa from "./assets/images/chasqui-arequipa.jpg"
import ChasquiLimaCentro from "./assets/images/chasqui-limacentro.jpg"
import ChasquiRural from "./assets/images/chasqui-rural.jpg"

import ChasquiMision from "./assets/images/chasqui-mision.jpg"
import ChasquiVision from "./assets/images/chasqui-vision.jpg"


import ChasquiParallax from "./assets/images/chasqui-parallax.svg"

import servicio1 from "./assets/images/chasqui-parallax.svg"
import servicio2 from "./assets/images/chasqui-parallax.svg"
import servicio3 from "./assets/images/chasqui-parallax.svg"
import servicio4 from "./assets/images/chasqui-parallax.svg"
import servicio5 from "./assets/images/chasqui-parallax.svg"
import servicio6 from "./assets/images/chasqui-parallax.svg"
import servicio7 from "./assets/images/chasqui-parallax.svg"

import cliente1 from "./assets/images/cliente1.png"
import cliente2 from "./assets/images/cliente2.png"
import cliente3 from "./assets/images/cliente3.png"
import cliente4 from "./assets/images/cliente4.png"
import cliente5 from "./assets/images/cliente5.png"

export default {
    name: "App",
    data () {
        return {
            assets: {
                ChasquiLimaCentro: ChasquiLimaCentro,
                ChasquiArequipa: ChasquiArequipa,
                ChasquiRural: ChasquiRural,
                ChasquiMision: ChasquiMision,
                ChasquiVision: ChasquiVision,
                ChasquiParallax: ChasquiParallax
            },
            isToolbarFixed: true,
            content : {
                sections: {
                    home: {
                        includeInMenu: true,
                        title: "Inicio",
                        isActive: true
                    },
                    about: {
                        includeInMenu: true,
                        title: "Nosotros",
                        isActive: false
                    },
                    services : {
                        includeInMenu: true,
                        title: "Servicios",
                        isActive: false                        
                    },
                    clients : {
                        includeInMenu: true,
                        title: "Clientes",
                        isActive: false
                    },
                    contact: {
                        includeInMenu: true,
                        title: "Contacto",
                        isActive: false
                    }
                },
                home: {
                    contents : {
                        title: "El title",
                        text: "El lorem ipsum va aqui",
                        image: "imagen"
                    },
                    carousel: {
                        items: [
                            {
                              src: ChasquiLimaCentro
                            },
                            {
                              src: ChasquiArequipa
                            },
                            {
                              src: ChasquiRural
                            }
                        ],
                    },
                },
                about: {
                    contents : {
                        mision: {
                            title: "El title",
                            text: "El lorem ipsum va aqui",
                            image: "imagen"
                        },
                        vision: {
                            title: "El title",
                            text: "El lorem ipsum va aqui",
                            image: "imagen"                            
                        },
                    },
                },
                services: [
                    {
                        src: servicio1
                    },
                    {
                        src: servicio2
                    },
                    {
                        src: servicio3
                    },
                    {
                        src: servicio4
                    },
                    {
                        src: servicio5
                    },
                    {
                        src: servicio6
                    },
                    {
                        src: servicio7
                    },                                                                                                                   
                ],
                clients: [
                    {
                        src: cliente1
                    },
                    {
                        src: cliente2
                    },
                    {
                        src: cliente3
                    },
                    {
                        src: cliente4
                    },
                    {
                        src: cliente5
                    },
                ],
                contact: {

                }
            },
            maps: {
                center: {
                    lat:-12.1450982,
                    lng:-76.9876482
                },
                options: {
                    draggable: true,
                    disableDefaultUI: true,
                }
            },
            props: {
		        menuTab: {
                    type: Array,
		        	default () {
		        		return []
		        	}
		        },
            },
        }
    },
    computed: {
        activeSection() {
            return this.getActiveSection()
        },
        toolbarHeight() {
            return document.getElementById("toolbar")
                ? document.getElementById("toolbar").clientHeight
                : 0
        }
    },
    methods: {
        getActiveSection() {
            return Object.values(this.content.sections).filter(section => {
                return section.isActive
            })[0].title
        },
        scrollTo(sectionId) {
            let target = this.$refs[sectionId]

            target &&
                this.$vuetify.goTo(target, {
                    easing: "easeInOutQuad",
                    offset: -0.25 * this.toolbarHeight
                })
        },
       onResize() {
            /*$(document).ready(function() {
            
                $(window).scroll(function() {
                
                    var height = $('.toolbar').height();
                    var scrollTop = $(window).scrollTop();

                    if (scrollTop >= height - 40) {
                        $('.toolbar').addClass('solid-toolbar');
                    } else {
                        $('.toolbar').removeClass('solid-toolbar');
                    }

                });
            });*/
        },
        mounted() {
            this.onResize()
            window.addEventListener("resize", this.onResize)
        },
        beforeDestroy() {
            if (typeof window !== "undefined") {
              window.removeEventListener("resize", this.onResize)
            }
        }
    },
}
</script>