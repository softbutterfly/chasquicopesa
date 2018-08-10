<template>
    <footer class="ch-footer white--text">
        <v-layout fill-height class="gutter container" row >
            <v-flex xs12 md6 text-xs-center text-md-left class="no-margin">
                © 2018 Chasqui Copesa
            </v-flex>
            <v-flex xs12 md6 text-xs-center text-md-right>
              Con <v-icon color="red darken-1" size=5>fas fa-heart</v-icon> por <a href="https://softbutterfly.io" targer="_blank" class="softbutterfly">Soft<strong>Butterfly</strong></a>
            </v-flex>
        </v-layout>
    </footer>
</template>

<style lang="less">
    .ch-footer {
        height: 54px;
        line-height: 54px;
        background-color: #2E2E2E;
        &.fixed {
            position: fixed;
        }
    }
</style>
    
<script>
export default {
    name: "ch-footer",
}
</script>
