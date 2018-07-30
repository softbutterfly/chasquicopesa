<template>
    <div class="ch-section-ltr">
        <div>
            <h3 class="title is-3" v-if="!!title" title="title">
                {{ title }}
            </h3>
            <div class="text" v-if="!!text" text="text">
                {{ text }}
            </div>
            <div class="image" v-if="!!image" label="image">
                {{ image }}
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .ch-section-ltr {

    }
</style>

<script>
export default {
    name:"ch-section-ltr"
}
</script>


