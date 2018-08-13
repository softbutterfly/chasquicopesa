<template>
    <v-app v-scroll="onScroll" class="page">
        <v-card class="toolbar-container fixed" id="toolbar-container">
            <v-toolbar black id="toolbar" :class="{
                'v-toolbar--active': isMenuActive,
                'v-toolbar--solid': isMenuSolid,
            }">
                <v-spacer></v-spacer>
                <template v-for="(section, sectionId) in content.sections">
                  <v-toolbar-items class="hidden-sm-and-down" v-if="section.includeInMenu" :key="section.title" @click="scrollTo(sectionId)">
                    <v-btn flat :ripple="false" >{{ section.title }}</v-btn>
                  </v-toolbar-items>
                </template>
                <v-menu close-on-content-click offset-y transition="slide-y-transition" class="hidden-md-and-up">
                    <v-toolbar-side-icon :ripple="false" slot="activator" @click="toggleMenu"></v-toolbar-side-icon>
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
            <carousel :perPage="1" :autoplay="true" :loop="true">
                <slide v-for="(slide, i) in content.home.carousel.items" :key="i">
                    <img :src="slide.src">
                </slide>
            </carousel>
            <div class="carousel__content" >
                <div class="columns is-mobile">
                    <div class="column is-half">
                        <img :src="assets.ChasquiLogo">
                        <div class="carousel__text">
                            La recompensa de nuestro trabajo radica en la satisfacción y fidelidad de nuestros clientes.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="about" id="about">
            <div id="about-us" class="ch-section">
                <img :src="assets.RedFeather" class="chasqui-" style="
                    position: absolute;
                    opacity: 0.4;
                    transform: rotate(25deg);
                    width: 15%;
                    left: 15%;
                    top: 16%;">
                <img :src="assets.RedFeather" style="
                    position: absolute;
                    opacity: 0.4;
                    transform: rotate(-100deg);
                    width: 15%;
                    left: 22%;
                    top: 23%;">
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-12">
                    <div class="tile vertical-centering">
                      <div class="tile tile__text is-parent is-vertical" style="padding:0 10% 0 5%">
                        <article class="tile is-child">
                            <h3 class="simple-title title is-3">QUIENES SOMOS</h3>
                            <div class="text-content">
                                Somos una empresa de prestación de servicios de mensajería,
                                contamos con una adecuada logística y tecnología,
                                siendo esta la que nos permite realizar las entregas de nuestros clientes en tiempo récord.
                            </div>
                        </article>
                      </div>
                      <div class="tile tile__image is-parent">
                        <article class="tile is-child">
                            <div class="carousel__container">
                                <div class="carousel__label">VALORES</div>
                                <carousel :perPage="1" :autoplay="false" :autoplayTimeout="6000" :loop="true">
                                    <slide v-for="(value, i) in content.about.contents.aboutUs.carousel" :key="i">
                                        <div class="tile is-ancestor" style="max-width:425px;">
                                            <div class="tile is-vertical is-12">
                                                <div class="tile content-order vertical-centering">
                                                    <div class="tile tile__image is-parent vertical-centering">
                                                        <article class="tile is-child tile__number">
                                                            <p class="carousel-number"> {{ value.number }} </p>
                                                        </article>
                                                    </div>
                                                    <div class="tile tile__text is-parent is-vertical" >
                                                        <article class="tile is-child" >
                                                            <div class="carousel-title"> {{ value.title }} </div>
                                                            <div class="carousel-description"> {{ value.text }} </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </slide>
                                </carousel>
                            </div>
                            <img :src="assets.ChasquiValor">
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div id="mision" class="ch-section">
                <img :src="assets.GreenFeather" style="
                    position: absolute;
                    opacity: 0.6;
                    transform: rotate(-45deg);
                    width: 25%;
                    right: -9%;
                    top: 30%;">
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-12">
                    <div class="tile content-order vertical-centering">
                      <div id="second-order" class="tile tile__image is-parent">
                        <article class="tile is-child">
                          <figure class="image">
                            <img :src="assets.ChasquiMision">
                          </figure>
                        </article>
                      </div>
                      <div id="first-order" class="tile tile__text is-parent is-vertical" style="z-index:999;">
                        <article class="tile is-child">
                            <h3 class="simple-title title is-3 has-text-right">MISIÓN</h3>
                            <div class="text-content has-text-right">
                                Somos una empresa Courier que brinda servicios de mensajería a nivel local y nacional,
                                garantizando un servicio de calidad y eficiencia en los tiempos establecidos,
                                logrando así, superar las expectativas de nuestros clientes.
                            </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div id="vision" class="ch-section">
                <img :src="assets.BlueFeather" style="
                    position: absolute;
                    opacity: 0.6;
                    transform: rotate(10deg);
                    width: 15%;
                    left: 8%;
                    top: 50%;">
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-12">
                    <div class="tile vertical-centering">
                      <div class="tile tile__text is-parent is-vertical">
                        <article class="tile is-child">
                            <h3 class="simple-title title is-3">VISIÓN</h3>
                            <div class="text-content has-text-left">
                                Ser reconocida como la empresa Courier más confiable para entidades públicas y privadas,
                                otorgando soluciones logísticas y de comunicación con la mayor cobertura a nivel nacional
                                e internacional, manteniendo nuestro compromiso y contribuyendo así al desarrollo del país.
                            </div>
                        </article>
                      </div>
                      <div class="tile tile__image is-parent">
                        <article class="tile is-child">
                          <figure class="image">
                            <img :src="assets.ChasquiVision">
                          </figure>
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
        <div  ref="services" id="services" class="ch-section">
            <img :src="assets.GreenFeather" style="
                position: absolute;
                opacity: 0.7;
                width: 18%;
                right: 0%;
                top: 71.5%;
                transform: rotate(-60deg) scaleX(-1);">
            <img :src="assets.RedFeather" style="
                position: absolute;
                opacity: 0.6;
                transform: rotate(0deg);
                width: 16%;
                left: 20%;
                top: 62%;">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-12">
                    <div class="tile vertical-centering">
                        <div class="tile tile__text is-parent is-vertical">
                            <article class="tile is-child" style="padding: 0px 18% 0px 9%;">
                                <h3 class="simple-title title is-3">NUESTROS SERVICIOS</h3>
                                <div class="text-content">
                                    Contamos con el personal calificado y una red de representantes a nivel local y nacional
                                    logrando realizar las entregas en el momento oportuno con compromiso y ética,
                                    cualidades que nos caracterizan.
                                    <ul class="service-terms">
                                        <li v-for="(condition, i) in content.services.contents.terms" :key="i"> <sup>(*)</sup>{{condition}}  </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        <div class="tile tile__image is-parent">
                            <article class="tile is-child">
                                <div class="carousel__container">
                                    <div class="carousel__label">SERVICIOS</div>
                                    <carousel :perPage="1" :autoplay="false" :autoplayTimeout="7000" :loop="true">
                                        <slide v-for="(service, i) in content.services.contents.carousel" :key="i">
                                            <div class="tile is-ancestor">
                                                <img style="max-height:440px" :src="service.image">
                                            </div>
                                        </slide>
                                    </carousel>
                                    <carousel class="TextCarousel" :perPage="1" :autoplay="false" :autoplayTimeout="7000" :loop="true">
                                        <slide v-for="(service, i) in content.services.contents.carousel" :key="i">
                                            <div class="tile is-ancestor">
                                                <div class="tile is-vertical is-12">
                                                    <div class="tile content-order vertical-centering">
                                                        <div class="tile is-parent vertical-centering">
                                                            <article class="tile is-child tile__number">
                                                                <p class="carousel-number"> {{ service.number }} </p>
                                                            </article>
                                                        </div>
                                                        <div class="tile tile__text is-parent is-vertical" >
                                                            <article class="tile is-child" >
                                                                <div class="carousel-title"> {{ service.title }} </div>
                                                                <div class="carousel-description"> {{ service.text }} </div>
                                                            </article>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>
                                    </carousel>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="clients" id="clients" class="ch-section">
            <img :src="assets.BlueFeather" style="
                position: absolute;
                opacity: 0.6;
                transform: rotate(10deg);
                width: 18%;
                left: 15%;
                top: 73%;">
            <img :src="assets.RedFeather" style="
                position: absolute;
                opacity: 0.7;
                width: 14%;
                left: 3%;
                top: 82%;
                transform: rotate(-105deg);">
            <h3 class="simple-title title">NUESTROS CLIENTES</h3>
            <carousel :autoplay="false" :perPageCustom="[[0,2] ,[520, 3]]" :autoplayTimeout="5000" :loop="true">
                <slide v-for="(client, i) in content.clients" :key="i">
                    <img style="" :src="client.src">
                </slide>
            </carousel>
        </div>
        <div ref="contact" id="contact" class="ch-section">
            <img :src="assets.GreenFeather" style="
                position: absolute;
                opacity: 0.7;
                width: 17%;
                right: 35%;
                top: 87%;
                transform: rotate(-188deg);">
            <div class="columns">
                <div class="column is-half">
                    <h3 class="simple-title title has-text-centered">CONTÁCTENOS</h3>
                </div>
            </div>
            <div class="columns">
                <div id="form" class="column is-half">
                    <v-form>
                        <div class="display-flex">
                            <div class="field-label is-normal">
                                <label class="label">NOMBRE</label>
                            </div>
                            <input class="input" type="text">
                        </div>
                        <hr class="hr">
                        <div class="display-flex">
                            <div class="field-label is-normal">
                                <label class="label">COMPAÑIA</label>
                            </div>
                            <input class="input" type="text">
                        </div>
                        <hr class="hr">
                        <div class="display-flex">
                            <div class="field-label is-normal">
                                <label class="label">CELULAR</label>
                            </div>
                            <input class="input" type="tel">
                        </div>
                        <hr class="hr">
                        <div class="display-flex">
                            <div class="field-label is-normal vertical-centering">
                                <label class="label">CORREO ELECTRÓNICO</label>
                            </div>
                            <input class="input" type="email">
                        </div>
                        <hr class="hr">
                        <div class="display-flex">
                            <div class="field-label is-normal  vertical-centering">
                                <label class="label">DESCRIBA SUS NECESIDADES. MIENTRAS MÁS LO CONOCEMOS, MEJOR</label>
                            </div>
                            <textarea class="textarea" type="text"></textarea>
                        </div>
                        <div class="field is-horizontal">
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <button class="button is-primary">
                                            ENVIAR
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-form>
                </div>
                <div id="location" class="column is-offset-1">
                    <GmapMap
                        :center="maps.center"
                        :zoom="17"
                        :options="maps.options"
                        class="map"
                    >
                      <GmapMarker
                        :position="{
                            lat:-12.1450982,
                            lng:-76.9876482
                        }"
                        :clickable="true"
                        :draggable="false"
                      />
                    </GmapMap>
                    <div class="enterprise-info">
                        <div v-for="(info, i) in content.contact.contents.info" :key="i" class="tile content-order vertical-centering">
                            <div class=" tile__image is-parent vertical-centering">
                                <article class="tile is-child">
                                    <img :src="info.icon">
                                </article>
                            </div>
                            <div class="tile tile__text is-parent is-vertical" >
                                <article class="tile is-child" >
                                    <h4 class="title is-4"> {{ info.title }}: </h4>
                                    <li v-for="(item, i) in info.description" :key="i">{{ item }}</li>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer id="footer" class="grey darken-4 white--text">
            <v-container>
                <v-layout fill-height class="gutter" row wrap >
                    <v-flex xs12 md6 text-xs-center text-md-left class="no-margin">
                        © 2018 Chasqui Copesa
                    </v-flex>
                    <v-flex xs12 md6 text-xs-center text-md-right>
                        Con <v-icon color="red darken-1">fas fa-heart</v-icon> por
                        <a @click="goToSoftButtterfly" class="softbutterfly">
                            Soft<strong>Butterfly</strong>
                        </a>
                    </v-flex>
                </v-layout>
            </v-container>
        </footer>
    </v-app>
</template>

<style lang="less">
/*
Chasqui-colors
    #5A7C37 -------------- LIGHT GREEN
    #006737 -------------- GREEN
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
    font-family: PT Sans;
    background-color: #ffffff !important;
    font-size: 16px;
    /*--------- TOOLBAR & MENU ---------*/
    .v-menu__content {
        position: fixed;
        top: 128px !important;
        top: 128px;
        right: 0;
        width: 100% !important;
        left: 0 !important;
        max-width: 100%;
        border-radius: 0px;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
            0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        .v-list {
            padding: 0 !important;
            .v-list__tile {
                height: 56px;
                padding: 0 32px;
                font-weight: 600;
            }
        }

        &.menuable__content__active {
            width: 100% !important;
            min-width: 100% !important;
            top: 128px !important;
            transform-origin: none !important;
            z-index: 99999999999 !important;
            position: fixed !important;
            box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.18) !important;
            transition: 0.3s;
            opacity: 1;
            animation-name: fadeInOpacity;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-duration: 2s;

            .v-toolbar__content {
                background-color: #fff !important;
            }
        }
    }

    .v-toolbar {
        height: inherit;
        background-color: transparent !important;
        position: fixed !important;
        z-index: 9999999 !important;
        box-shadow: none;
        transition: background-color 0.2s linear;
        transition-delay: 0.1s;

        &.solid-toolbar {
            background-color: #2e2e2e;
            transition: background-color 0.2s linear;
            box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12);
        }

        .v-toolbar__content {
            height: 128px !important;
            width: 100%;
            transition: all 0.5s ease-in-out;

            .v-btn {
                min-width: 130px;
                font-family: Lato;
                font-weight: bold;
                color: white;
                font-size: 16px;
                padding: 0 24px;
                &:before {
                    opacity: 0;
                }
            }
        }

        &.v-toolbar--active {
            background-color: #ffffff !important;
            box-shadow: none !important;
            transition: none;
            .v-btn__content {
                color: #000000;
                transition: 0.1s;
            }
            .v-toolbar__content {
                background-color: #ffffff !important;
            }
        }

        &.v-toolbar--solid {
            background-color: #ffffff !important;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12),
                0 3px 1px -2px rgba(0, 0, 0, 0.2) !important;
            transition: all 0.2s ease-in-out;
            .v-toolbar__content .v-btn {
                color: black !important;
                transition: 0s;
            }
        }
    }

    .ch-section {
        margin: 64px 0;
    }
    .vertical-centering {
        align-items: center;
        &-flex {
            display: flex;
            align-items: center;
        }
    }
    .simple-title {
        margin-bottom: 24px;
        font-family: Lato !important;
        font-weight: bold;
        font-size: 24px !important;
    }
    .tile.is-ancestor {
        margin: 0;
        &:last-child {
            margin-bottom: 0;
        }
    }

    #home {
        position: relative;
        margin: 0;

        .VueCarousel-pagination {
            transform: rotate(90deg);
            position: absolute;
            top: 50%;
            left: 45%;
        }
        .VueCarousel-dot {
            .VueCarousel-dot-button {
                background-color: transparent !important;
                border: 1px solid #ffffff;
            }
            &--active {
                .VueCarousel-dot-button {
                    background-color: #ffffff !important;
                }
            }
            &-button {
                &:focus {
                    outline: none;
                }
            }
        }
        .carousel__content {
            pointer-events: none;
            position: absolute;
            display: inline-block;
            text-align: center;
            top: 0;
            padding: 10%;
            height: 100%;
            width: 100%;
        }
        .carousel__text {
            margin-top: 5%;
            color: #ffffff;
            font-size: 32px;
            text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
        }
    }

    #about {
        .tile__text {
            padding: 0 5%;
            .tile.is-child {
                min-width: 240px;
            }
        }
        .tile__image {
            padding: 0px;
            flex-basis: auto;
            max-width: 900px;
        }
        #about-us {
            .tile__image {
                pointer-events: none;
                cursor: default;
                max-width: 665px;
                .tile.is-child {
                    position: relative;
                    .carousel__container {
                        position: absolute;
                        height: 100%;
                        .carousel__label {
                            position: absolute;
                            font-size: 24px;
                            font-weight: bold;
                            width: 190px;
                            height: 46px;
                            line-height: 46px;
                            text-align: center;
                            color: white;
                            background-color: #006737;
                        }
                        .VueCarousel {
                            right: 32px;
                            height: 100%;
                            max-width: 665px;
                            display: flex;
                            align-items: flex-end;
                            .VueCarousel-slide {
                                display: flex;
                                .tile__number {
                                    .carousel-number {
                                        text-shadow: -1px -1px rgba(0, 0, 0, 0.1);
                                        margin: 0;
                                        cursor: default;
                                        color: #efab1e;
                                        font-weight: bold;
                                        font-size: 56px;
                                    }
                                }
                                .tile__text {
                                    text-shadow: 1px 1px rgba(0, 0, 0, 0.7);
                                    .carousel-title {
                                        margin-bottom: 12px;
                                        width: 360px;
                                        font-size: 28px;
                                        color: #ffffff;
                                        font-weight: bold;
                                        line-height: 30px;
                                    }
                                    .carousel-description {
                                        width: 360px;
                                        font-size: 20px;
                                        color: #ffffff;
                                        line-height: 24px;
                                        margin-bottom: 12px;
                                    }
                                }
                            }
                            .VueCarousel-pagination {
                                display: none;
                                height: 0;
                            }
                        }
                    }
                    img {
                        float: right;
                    }
                }
            }
        }
        #vision {
            margin-bottom: 128px;
        }
    }
    .chasqui-parallax {
        z-index: 999;
        margin: 24px 0;
    }
    #services {
        padding-top: 72px;
        .tile__text {
            .service-terms {
                padding: 0;
                font-size: 12px;
                margin-top: 16px;
            }
        }
        .tile__image {
            padding: 0;
            height: 100%;
            pointer-events: none;
            cursor: default;
            .tile.is-child {
                position: relative;
                height: 100%;
                .carousel__container {
                    position: relative;
                    height: 100%;
                    .carousel__label {
                        position: absolute;
                        z-index: 1;
                        font-size: 24px;
                        font-weight: bold;
                        width: 190px;
                        height: 46px;
                        line-height: 46px;
                        text-align: center;
                        color: white;
                        background-color: #006737;
                    }
                    .VueCarousel {
                        height: 100%;
                        max-width: 665px;
                        display: flex;
                        align-items: flex-end;

                        &.TextCarousel {
                            position: absolute;
                            top: 0;
                            left: -43px;

                            .tile.is-ancestor {
                                max-width: 420px;
                            }
                        }
                        .VueCarousel-slide {
                            display: flex;
                            .tile__number {
                                .carousel-number {
                                    text-shadow: -1px -1px rgba(0, 0, 0, 0.1);
                                    margin: 0;
                                    cursor: default;
                                    color: #efab1e;
                                    font-weight: bold;
                                    font-size: 56px;
                                }
                            }
                            .tile__text {
                                text-shadow: 1px 1px rgba(0, 0, 0, 0.7);
                                .carousel-title {
                                    margin-bottom: 12px;
                                    width: 400px;
                                    font-size: 28px;
                                    color: #ffffff;
                                    font-weight: bold;
                                    line-height: 30px;
                                }
                                .carousel-description {
                                    width: 400px;
                                    font-size: 20px;
                                    color: #ffffff;
                                    line-height: 24px;
                                    margin-bottom: 12px;
                                }
                            }
                        }
                        .VueCarousel-pagination {
                            display: none;
                            height: 0;
                        }
                    }
                }
            }
        }
    }

    #clients {
        padding: 128px 0;
        &.ch-section {
            margin: 0 5%;
        }
        .simple-title {
            z-index: 999;
            margin-bottom: 64px;
        }
        .VueCarousel {
            pointer-events: none;
            .VueCarousel-slide {
                display: flex;
                align-items: center;
                img {
                    margin: 0 auto;
                }
            }
        }
        .VueCarousel-pagination {
            display: none;
        }
    }

    #contact {
        padding: 80px 0;
        &.ch-section {
            margin: 0 5%;
            .simple-title {
                margin: 0;
            }
        }
        #form {
            &.column.is-half {
                margin-top: 48px;
                .display-flex {
                    display: flex;
                }
                .hr {
                    margin: 1.8rem 0;
                }
                .columns {
                    margin: 0;
                }
                .ch-text-field,
                .ch-textarea {
                    display: flex;
                }
                label {
                    text-align: left;
                }
                input.input[type="email"] {
                    height: auto;
                }
                input,
                .textarea {
                    width: 65%;
                    &:focus,
                    &:active {
                        border: 2px solid #efab1e;
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
                .control {
                    text-align: right;
                    button {
                        margin: 24px 0;
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        padding: 0;
                        max-width: 150px;
                        font-weight: bold;
                        background-color: #e8664a;
                    }
                }
            }
        }
        #location {
            &.column {
                padding: 0;
            }
            .map {
                width: auto;
                height: 60%;
            }
            .enterprise-info {
                margin: 12px 0;
                .tile.is-parent {
                    padding: 12px 0 12px 32px;
                }
                .tile__image {
                    text-align: center;
                }
                .title.is-4 {
                    font-family: Lato !important;
                    margin: 0;
                    font-weight: bold;
                }
                li {
                    list-style: none;
                }
                img {
                    max-width: none;
                }
            }
        }
    }

    #footer {
        .softbutterfly {
            color: #ffffff;
            text-decoration: none;

            &:hover {
                color: #2675ca;
                strong {
                    color: #e53935;
                }
            }
        }
    }
}

@media screen and (max-width: 1225px) {
    #home {
        .carousel__content {
            padding: 11% 8% !important;
            img {
                width: 300px;
            }
            .carousel__text {
                font-size: 28px;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    #home {
        .carousel__content {
            padding: 8%;
            img {
                width: 250px;
            }
            .carousel__text {
                font-size: 24px;
            }
        }
    }
    #about {
        #vision {
            margin-bottom: 32px;
        }
    }
    #services {
        .tile.tile__text.is-parent.is-vertical {
            max-width: 380px;
        }
    }
    #location {
        &.column.is-offset-1 {
            margin-left: 6%;
        }
        li {
            word-break: break-all;
        }
    }
}

@media screen and (max-width: 900px) {
    #home {
        .carousel__content {
            img {
                width: 220px;
            }
            .carousel__text {
                font-size: 20px;
            }
        }
    }
    #about {
        #vision {
            margin-bottom: 0 !important;
        }
    }
    .chasqui-parallax {
        margin: 0 !important;
    }
    #services {
        margin-bottom: 0 !important;
        .tile.tile__text.is-parent.is-vertical {
            min-width: 320px;
        }
        .VueCarousel {
            .VueCarousel-wrapper {
                height: inherit;
            }
        }
        .VueCarousel.TextCarousel {
            .VueCarousel-wrapper {
                height: auto;
            }
        }
    }
    #clients {
        padding: 128px 0 96px 0 !important;
        &.ch-section {
            margin: 0 5% !important;
            img {
                padding: 0 12px;
            }
        }
    }
}

@media screen and (max-width: 900px) and (min-width: 769px) {
    #contact {
        #location {
            .map {
                height: 50% !important;
            }
            .enterprise-info {
                img {
                    width: 80% !important;
                }
                .tile__text {
                    padding: 12px 0 12px 16px !important;
                    li {
                        font-size: 14px;
                    }
                }
            }
        }
    }
    #services {
        .tile.tile__text.is-parent.is-vertical {
            max-width: 320px;
        }
    }
}

@media only screen and (max-width: 768px) {
    #home {
        .carousel__content {
            padding: 10% 6% !important;
            img {
                width: 180px;
            }
            .carousel__text {
                font-size: 18px;
            }
        }
    }
    #about {
        .text-content {
            text-align: center !important;
        }
        #about-us {
            .tile__image {
                display: flex;
                max-width: none !important;
                .tile.is-child {
                    .carousel__container {
                        right: 0;
                        left: 0;
                        .VueCarousel {
                            right: 0 !important;
                            max-width: 768px !important;
                            .tile.is-ancestor {
                                display: flex;
                                align-self: flex-end;
                                max-width: none !important;
                                .tile.content-order {
                                    flex-flow: unset;
                                    max-width: 500px;
                                    margin: 0 auto;
                                    .tile__text {
                                        margin-bottom: 24px;
                                    }
                                }
                            }
                        }
                    }
                    img {
                        display: flex;
                        width: 100%;
                    }
                }
            }
            .carousel-number {
                text-align: center;
            }
            .carousel-title,
            .carousel-description {
                text-align: center;
            }
        }
        .content-order {
            display: flex;
            flex-flow: column;
            div#first-order {
                order: 1;
            }
            div#second-order {
                order: 2;
            }
        }
        .tile__text {
            margin: 48px 0;
            .simple-title {
                text-align: center !important;
            }
        }
        #vision {
            margin-bottom: 0;
        }
    }
    .chasqui-parallax {
        margin: 0;
        .v-parallax {
            height: 520px !important;
        }
    }
    #services {
        padding-top: 32px !important;
        .tile__text {
            text-align: center !important;
            padding: 0;
            &.is-parent.is-vertical {
                max-width: none !important;
            }
            .tile.is-child {
                padding: 0 5% !important;
                margin: 48px 0 !important;
            }
        }
        .tile__image {
            .VueCarousel {
                max-width: none !important;
                img {
                    max-height: none;
                    width: 100%;
                }
            }
            .VueCarousel.TextCarousel {
                left: 0 !important;
                right: 0;
                .tile.is-ancestor {
                    max-width: none !important;
                    display: flex;
                    align-self: flex-end;
                    .tile.content-order.vertical-centering {
                        display: flex;
                        flex-flow: unset;
                        max-width: 500px;
                        margin: 0 auto;
                        .tile.is-child {
                            margin: 24px 0 !important;
                        }
                        .carousel-title,
                        .carousel-description {
                            width: 100%;
                        }
                    }
                }
                .tile.tile__text.is-parent.is-vertical {
                    min-width: 420px !important;
                }
            }
        }
    }
    #clients {
        .simple-title {
            margin-bottom: 96px !important;
            text-align: center;
        }
    }
    #contact {
        padding-bottom: 32px !important;
        #form {
            form {
                .display-flex {
                    justify-content: space-between;
                }
            }
        }
        #location {
            margin: 0;
            .vue-map-container.map {
                margin: 24px 0;
            }
            .map {
                height: 300px !important;
            }
        }
        .enterprise-info {
            flex-wrap: wrap;
            flex-direction: row;
            display: flex;
            .tile.content-order {
                display: flex;
                margin: 0 auto;
                width: fit-content;
                &:nth-child(2) {
                    flex: 0.7;
                    padding-left: 12px;
                }
                &:last-child {
                    order: 1;
                    flex: 1 0 100%;
                }
            }
        }
    }
}

@media only screen and (max-width: 645px) {
    #home {
        .carousel__content {
            padding: 8% 6% !important;
            img {
                width: 140px;
            }
            .carousel__text {
                font-size: 16px;
            }
        }
    }
    #contact {
        .enterprise-info {
            img {
                width: 70%;
            }
            .title.is-4 {
                font-size: 18px !important;
            }
            .tile.tile__text.is-parent {
                padding: 12px 0 12px 4px !important;
                &.is-vertical {
                    font-size: 14px;
                }
            }
        }
    }
}

@media only screen and (max-width: 520px) {
    #home {
        .carousel__content {
            padding: 7% 2% 7% 6% !important;
            img {
                width: 100px;
            }
            .carousel__text {
                font-size: 14px;
            }
        }
    }
    #about {
        .ch-section {
            margin: 32px 0 !important;
        }
        .tile__text {
            margin: 32px 0 !important;
        }
        .simple-title {
            font-size: 20px !important;
        }
        .text-content {
            font-size: 14px !important;
        }
        .carousel-number {
            font-size: 48px !important;
            padding-left: 20px !important;
        }
        .carousel-description {
            max-width: 300px !important;
            font-size: 16px !important;
        }
        .carousel-title {
            max-width: 300px !important;
            font-size: 24px !important;
        }
    }
    .chasqui-parallax {
        .v-parallax {
            height: 350px !important;
        }
        .v-parallax__image {
            bottom: 25px !important;
            height: 125% !important;
        }
    }
    #services {
        padding-top: 24px !important;
        &.ch-section {
            margin: 0 !important;
        }
        .tile__text {
            margin: 0 !important;
        }
        .simple-title {
            font-size: 20px !important;
        }
        .text-content {
            font-size: 14px !important;
        }
        .carousel-number {
            font-size: 48px !important;
            padding-left: 20px !important;
        }
        .carousel-description {
            max-width: 300px !important;
            font-size: 16px !important;
        }
        .carousel-title {
            max-width: 300px !important;
            font-size: 24px !important;
        }
    }
    #clients {
        padding: 96px 0 64px 0 !important;
        .simple-title {
            font-size: 20px !important;
        }
        img {
            padding: 0 4px !important;
        }
    }
    #contact {
        .enterprise-info {
            margin: 12px 30px !important;
        }
        .simple-title {
            font-size: 20px !important;
        }
        .field-label.is-normal.vertical-centering label {
            min-width: min-content;
        }
        .tile.content-order.vertical-centering:nth-child(2) {
            padding-left: 0;
            flex: 1 0 100%;
        }
    }
    #footer {
        font-size: 14px !important;
    }
}

@media only screen and (max-width: 420px) {
    #home {
        .carousel__content {
            padding: 7% 2% 7% 6% !important;
            img {
                width: 80px;
            }
            .carousel__text {
                font-size: 12px;
            }
        }
    }
}
</style>

<script>
import BlueFeather from "./assets/images/feather-blue.svg"
import RedFeather from "./assets/images/feather-red.svg"
import GreenFeather from "./assets/images/feather-green.svg"

import ChasquiLogo from "./assets/images/chasqui-logo.png"
import ChasquiArequipa from "./assets/images/chasqui-arequipa.jpg"
import ChasquiLimaCentro from "./assets/images/chasqui-limacentro.jpg"
import ChasquiRural from "./assets/images/chasqui-rural.jpg"

import ChasquiParallax from "./assets/images/chasqui-parallax.jpg"

import ChasquiValor from "./assets/images/chasqui-valor.jpg"
import ChasquiVision from "./assets/images/chasqui-vision.jpg"
import ChasquiMision from "./assets/images/chasqui-mision.jpg"

import servicio1 from "./assets/images/service1.jpg"
import servicio2 from "./assets/images/service2.jpg"
import servicio3 from "./assets/images/service3.jpg"
import servicio4 from "./assets/images/service4.png"
import servicio5 from "./assets/images/service5.jpg"
import servicio6 from "./assets/images/service6.jpg"
import servicio7 from "./assets/images/service7.jpg"

import cliente1 from "./assets/images/cliente1.png"
import cliente2 from "./assets/images/cliente2.png"
import cliente3 from "./assets/images/cliente3.png"
import cliente4 from "./assets/images/cliente4.png"
import cliente5 from "./assets/images/cliente5.png"
import cliente6 from "./assets/images/cliente6.svg"

import mail from "./assets/images/mail.svg"
import phone from "./assets/images/phone.svg"
import facebook from "./assets/images/facebook.svg"

export default {
    name: "App",
    data() {
        return {
            assets: {
                ChasquiLimaCentro: ChasquiLimaCentro,
                ChasquiArequipa: ChasquiArequipa,
                ChasquiRural: ChasquiRural,
                ChasquiMision: ChasquiMision,
                ChasquiVision: ChasquiVision,
                ChasquiParallax: ChasquiParallax,
                ChasquiLogo: ChasquiLogo,
                ChasquiValor: ChasquiValor,
                BlueFeather: BlueFeather,
                RedFeather: RedFeather,
                GreenFeather: GreenFeather
            },
            isToolbarFixed: true,
            content: {
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
                    services: {
                        includeInMenu: true,
                        title: "Servicios",
                        isActive: false
                    },
                    clients: {
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
                    contents: {
                        title: "El title",
                        text: "El lorem ipsum va aqui",
                        image: "imagen"
                    },
                    carousel: {
                        items: [
                            {
                                src: ChasquiRural
                            },
                            {
                                src: ChasquiLimaCentro
                            },
                            {
                                src: ChasquiArequipa
                            }
                        ]
                    }
                },
                about: {
                    contents: {
                        aboutUs: {
                            carousel: {
                                1: {
                                    number: "01",
                                    title: "Trabajo en Equipo",
                                    text:
                                        "Somos activos, apasionados, compartimos nuestro conocimiento y aprendemos de todos."
                                },
                                2: {
                                    number: "02",
                                    title: "Responsabilidad",
                                    text:
                                        "Nuestros colaboradores son responsables de las acciones que ejecutan al realizar sus funciones con dedicación y eficiencia."
                                },
                                3: {
                                    number: "03",
                                    title: "Cautela",
                                    text:
                                        "Nuestros colaboradores mantienen en total discreción la información referencial al ejercicio de sus funciones."
                                },
                                4: {
                                    number: "04",
                                    title: "Emocionalidad",
                                    text:
                                        "Brindamos un trato cálido y humano a nuestros clientes y colaboradores."
                                },
                                5: {
                                    number: "05",
                                    title: "Puntualidad",
                                    text:
                                        "Cumplimos nuestros compromisos y obligaciones en los plazos establecidos."
                                },
                                6: {
                                    number: "06",
                                    title: "Calidad de servicio",
                                    text:
                                        "Estamos comprometidos en brindar un servicio que cumpla con los mejores estándares, por ello, nuestro servicio se caracteriza por ser comprometido, eficaz y eficiente."
                                },
                                7: {
                                    number: "07",
                                    title: "Preservación del medio ambiente",
                                    text:
                                        "Estamos comprometidos con el cuidado del medio ambiente, creando más áreas verdes, y otorgando un adecuado tratamiento a los desechos."
                                }
                            }
                        },
                        mision: {
                            title: "El title",
                            text: "El lorem ipsum va aqui",
                            image: "imagen"
                        },
                        vision: {
                            title: "El title",
                            text: "El lorem ipsum va aqui",
                            image: "imagen"
                        }
                    }
                },
                services: {
                    contents: {
                        terms: {
                            1: "Las entregas promedio en Lima Metropolitana se realizan en 24 horas.",
                            2: "Nivel nacional en la capital de departamento es de 24 – 48 horas.",
                            3: "Para ciudades en tránsito el tiempo de entrega depende de la distancia del destino en condiciones regulares, no considerando domingos y feriados."
                        },
                        carousel: {
                            1: {
                                image: servicio1,
                                number: "01",
                                title: "Servicios In House",
                                text:
                                    "Servicio que se realiza dentro de la entidad pública o privada."
                            },
                            2: {
                                image: servicio2,
                                number: "02",
                                title: "Servicios de motorizados",
                                text:
                                    "Servicio de reparto de documentos expreso."
                            },
                            3: {
                                image: servicio3,
                                number: "03",
                                title:
                                    "Servicio de recojo y reparto de valijas entre entidades",
                                text:
                                    "Brindamos el servicio de recojo, reparto de valijas, con la seguridad requerida por nuestros clientes."
                            },
                            4: {
                                image: servicio4,
                                number: "04",
                                title: "Servicio de Courier (inmediato)",
                                text:
                                    "Brindamos servicio de recojo, entrega, devolución de cargos de documentos como y de paquetería."
                            },
                            5: {
                                image: servicio5,
                                number: "05",
                                title: "Servicio masivo",
                                text:
                                    "Brindamos el reparto masivo de documentos (revistas, estados de cuentas, y otros)"
                            },
                            6: {
                                image: servicio6,
                                number: "06",
                                title: "Servicio de digitación",
                                text:
                                    "Ofrecemos precisión y rapidez en el digitado de toda la información requerida por nuestros clientes para su base de datos."
                            },
                            7: {
                                image: servicio7,
                                number: "07",
                                title: "Servicio de digitalizado",
                                text:
                                    "Servicio que mediante técnicas fotoeléctricas o de escáner convierte imágenes análogas en imágenes digitales para facilitar su búsqueda."
                            }
                        }
                    }
                },
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
                    {
                        src: cliente6
                    }
                ],
                contact: {
                    contents: {
                        info: {
                            1: {
                                icon: mail,
                                title: "CORREO",
                                description: [
                                    "contacto@chasquicopesa.com.pe",
                                    "chasquicopesa@outlook.com",
                                    "chasquicopesa@yahoo.com"
                                ]
                            },
                            2: {
                                icon: phone,
                                title: "TELÉFONO",
                                description: ["988890407"]
                            },
                            3: {
                                icon: facebook,
                                title: "FACEBOOK",
                                description: [
                                    "https://www.facebook.com/chasqui.copesa"
                                ]
                            }
                        }
                    }
                }
            },
            maps: {
                center: {
                    lat: -12.1450982,
                    lng: -76.9876482
                },
                options: {
                    draggable: true,
                    disableDefaultUI: true
                }
            },
            props: {
                menuTab: {
                    type: Array,
                    default() {
                        return []
                    }
                }
            },
            isMenuActive: false,
            scrollTop: 0
        }
    },
    computed: {
        isMenuSolid() {
            return this.scrollTop > 200
        },
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
        goToSoftButtterfly() {
            window.open("https://softbutterfly.io", "_blank")
        },
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive
        },
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
                    offset: -0.8 * this.toolbarHeight
                })
        },
        onScroll() {
            this.scrollTop =
                window.pageYOffset || document.documentElement.scrollTop
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

            this.onScroll()
            // window.addEventListener("scroll", () => {this.onScroll() }, false)
        },
        beforeDestroy() {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", this.onResize)
            }
        }
    }
}
</script>
