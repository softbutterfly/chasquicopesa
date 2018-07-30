<template>
    <div class="ch-map">
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
</template>

<style lang="less">

</style>

<script>
export default {
    name: "ch-map",
    maps: {
        center: {
            lat:-12.1450982,
            lng:-76.9876482,
        },
        options: {
            draggable: true,
            disableDefaultUI: true,
        }
    }
}
</script>
