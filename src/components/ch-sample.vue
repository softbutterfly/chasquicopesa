<template>
    <div>
        <div ref="home " id="home" class="ch-section">
            <v-carousel hide-controls>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
        </div>
        <div id="mision" class="ch-section">
            <div class="section-wrapper tile is-ancestor">
                <div class="image tile is-parent">
                    <img src="./../assets/images/chasqui-preview.jpg">
                </div>
                <div class="section-content tile is-4 is-vertical is-parent">    
                    <div class="chasqui-title">
                        <h3 class="simple-title title is-3">MISIÓN</h3>
                    </div>
                    <div class="text-content">
                        Somos una empresa Courier que brinda servicios de mensajería a nivel local y nacional, 
                        garantizando un servicio de calidad y eficiencia en los tiempos establecidos, 
                        logrando así, superar las expectativas de nuestros clientes.
                    </div>
                </div>
            </div>
        </div>
        <div id="vision" class="ch-section">
            <div class="section-wrapper tile is-ancestor">
                <div class="section-content tile is-4 is-vertical is-parent">    
                    <div class="chasqui-title">
                        <h3 class="simple-title title is-3">VISIÓN</h3>
                    </div>
                    <div class="text-content">
                        Ser reconocida como la empresa Courier más confiable para entidades públicas y privadas, 
                        otorgando soluciones logísticas y de comunicación con la mayor cobertura a nivel nacional 
                        e internacional, manteniendo nuestro compromiso con los valores que reflejamos día a día, 
                        contribuyendo así al desarrollo del país con más puestos de trabajo.
                    </div>
                </div>
                <div class="image tile is-parent">
                    <img src="./../assets/images/chasqui-preview.jpg">
                </div>
            </div>
        </div>
        <div class="chasqui-parallax">
            <v-parallax height="400" :src="assets.ChasquiParallax"></v-parallax>
        </div>
        <div id="servicios" class="ch-section">
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
                        <ch-service-item/>
                    </div>
                    <div class="column">
                        <ch-service-item/>
                        <ch-service-item/>
                        <ch-service-item/>
                    </div>
                    <div class="column">
                        <ch-service-item/>
                        <ch-service-item/>
                        <ch-service-item/>
                    </div>
                </div>
            </v-container>
        </div>
        <div id="clientes" class="ch-section">
        </div>
        <div id="contacto" class="ch-section">
            <v-container>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-5">
                        <div class="chasqui-title">
                            <h3 class="simple-title title is-3">CONTÁCTENOS</h3>
                        </div>
                        <div class="contact-form">
                            <v-form>
                                <ch-text-field
                                :required="true" 
                                label="NOMBRE"></ch-text-field>
                                <hr class="hr">
                                <ch-text-field 
                                label="COMPAÑIA"></ch-text-field>
                                <hr class="hr">
                                <ch-text-field
                                :required="true"  
                                label="CELULAR"></ch-text-field>
                                <hr class="hr">
                                <ch-text-field
                                :required="true" 
                                label="CORREO ELECTRÓNICO"></ch-text-field>
                                <hr class="hr">
                                <ch-textarea
                                :required="true" 
                                label="DESCRIBA SUS NECESIDADES. MIENTRAS MÁS LO CONOCEMOS, MEJOR"></ch-textarea>                                                                                                                           
                            </v-form>
                        </div>
                    </div>
                    <div id="location" class="tile is-parent">
                        <GmapMap
                            :center="maps.center"
                            :zoom="17"
                            :options="maps.options"
                            class="map">
                          <GmapMarker
                                :position="{
                                  lat:-12.1450982,
                                  lng:-76.9876482
                                }"
                            :clickable="true"
                            :draggable="true"
                          />
                        </GmapMap>
                    </div>
                </div>
            </v-container>
        </div>
    </div>
</template>

<style lang="less" scoped>
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
            }
        }
        &#mision {
        img {
            width: 100%;
            height: 600px;
        }
        }
        &vision {
        img {
            width: 100%;
            height: 600px;
        }
        }
        &#servicios {
            .columns {
                margin:0;
            }
            .services.columns {
                .service-number{
                    a {
                    color: #EFAB1E;
                    font-weight: bold;
                    font-size: 36px; 
                    }
                }
                img {
                    display: block;
                    height: auto;
                }
            }

        }
        &#contacto {

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

import cliente1 from "../assets/images/cliente1.png"
import cliente2 from "../assets/images/cliente2.png"
import cliente3 from "../assets/images/cliente3.png"
import cliente4 from "../assets/images/cliente4.png"
import cliente5 from "../assets/images/cliente5.png"
import ChasquiParallax from "../assets/images/chasqui-parallax.svg"


export default {
    name:"ch-sample",

    data () {
        return {
            assets: {
                ChasquiParallax: ChasquiParallax,
            },
            items: [
                {
                  src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                },
                {
                  src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {
                  src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                  src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ],
            clientes: [
                {
                    src: cliente1,
                },
                {
                    src: cliente2,
                },
                {
                    src: cliente3,
                },
                {
                    src: cliente4,
                },
                {
                    src: cliente5,
                },
            ],
            maps: {
                center: {
                    lat:-12.1450982,
                    lng:-76.9876482
                },
                options: {
                    draggable: true,
                    disableDefaultUI: true,
                }
            }

        }
    }
}
</script>
