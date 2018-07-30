<template>
    <div class="ch-section-rtl">
        <div class="section-wrapper">
            <h3 class="title is-3" v-if="!!title" title="title">
                {{ section.title }}
            </h3>
            <div class="text" v-if="!!text" text="text">
                {{ section.text }}
            </div>
            <div class="image" v-if="!!image" label="image">
                {{ image }}
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .ch-section-rtl {
        .title {
            
        }
    }
</style>

<script>
export default {
    name:"ch-section-rtl"
}
</script>


