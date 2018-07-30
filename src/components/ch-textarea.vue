<template>
	<div class="ch-textarea">
        <div class="field-label is-normal">
            <label class="label" label="label">
		    	{{ label }}<sup v-if="required">*</sup>            
            </label>
        </div>
        <textarea
            class="textarea" 
            :required="required"
            :type="type"
            :placeholder="placeholder"/>
	</div>
</template>

<style lang="less">

</style>

<script>
export default {
    name: "ch-textarea",
    props: {
        required: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        }
    }
}
</script>