<template>
    <div :class="inpDivContainerClass">
        <input type="text" :class="inpInputClass" :value="value" @input="inputInp">
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
    name: "Input",
    props: {
        size: {
            type: String,
            validator: function (value) {
                return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', undefined].indexOf(value) !== -1;
            },
        },
        shape: {
            type: String,
            validator: function (value) {
                return ['square', 'round', 'circle', undefined].indexOf(value) !== -1;
            },
        },
        color: {
            type: String,
            validator: function (value) {
                return ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning'].indexOf(value) !== -1;
            },
        },
        value: {
            type: String
        },
        input: {
            type: Function
        }
    },
    setup(props){
        props = reactive(props);
        return {
            inpDivContainerClass: computed(() => ({
                'inp-div-container': true,
                'size-extra-small': props.size === 'xs',
                'size-small': props.size === 'sm',
                'size-medium': props.size === 'md' || props.size == undefined,
                'size-large': props.size === 'lg',
                'size-extra-large': props.size === 'xl',
                'size-extra-extra-large': props.size === 'xxl',
                'color-primary': props.color === 'primary' || props.color == undefined,
                'color-secondary': props.color === 'secondary',
                'color-accent': props.color === 'accent',
                'color-error': props.color === 'error',
                'color-info': props.color === 'info',
                'color-success': props.color === 'success',
                'color-warning': props.color === 'warning',
                'shape-square': props.shape === 'square' || props.shape == undefined,
                'shape-round': props.shape === 'round',
                'shape-circle': props.shape === 'circle',
            })),
            inpInputClass: computed(() => ({
                'inp-input': true,
                'size-extra-small': props.size === 'xs',
                'size-small': props.size === 'sm',
                'size-medium': props.size === 'md' || props.size == undefined,
                'size-large': props.size === 'lg',
                'size-extra-large': props.size === 'xl',
                'size-extra-extra-large': props.size === 'xxl',
                'color-primary': props.color === 'primary' || props.color == undefined,
                'color-secondary': props.color === 'secondary',
                'color-accent': props.color === 'accent',
                'color-error': props.color === 'error',
                'color-info': props.color === 'info',
                'color-success': props.color === 'success',
                'color-warning': props.color === 'warning',
                'shape-square': props.shape === 'square' || props.shape == undefined,
                'shape-round': props.shape === 'round',
                'shape-circle': props.shape === 'circle',
            })),
        }
    },
    methods: {
        inputInp(event){
            const value = event.target.value
            if(this.input != undefined){
                this.input(value)
            }
        }
    }
}
</script>