<template>
	<div class="ch-text-field">
        <div class="field-label is-normal">
            <label class="label" label="label">
		    	{{ label }}<sup v-if="required">*</sup>            
            </label>
        </div>
        <input
            class="input" 
            :required="required"
            :type="type"
            :placeholder="placeholder">
	</div>
</template>

<style lang="less">

</style>

<script>
export default {
    name: "ch-text-field",
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