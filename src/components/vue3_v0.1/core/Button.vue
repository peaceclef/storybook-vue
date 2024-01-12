<!--
<attribute> 
required => '*' / optional => ' '
[*] label : label (String)
[ ] size  : xs / sm / md / lg / xl / xxl
[ ] type  : filled / outlined / text
[ ] shape : square / round / circle
[ ] color : primary / secondary / accent / error / info / success / warning
[ ] icon  : true / false
[ ] click : callback function
[ ] disabled : true / false
-->

<template>
    <div :class="btnDivContainerClass">
        <div :class="btnDivButtonClass" @click="event_click">
            <span :class="btnSpanIconClass" v-if="icon != undefined && icon === 'true'">
                <slot name="icon"></slot>
            </span>
            <span :class="btnSpanLabelClass" v-if="text == undefined || text === 'false'">{{ label }}</span>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
    name: 'Button',
    props: {
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            validator: function (value) {
                return ['filled', 'outlined', 'text', undefined].indexOf(value) !== -1;
            },
        },
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
        icon: {
            type: String
        },
        text: {
            type: String
        },
        click: {
            type: Function
        }
    },
    setup(props){
        props = reactive(props);
        return {
            btnDivContainerClass: computed(() => ({
                'btn-div-container': true,
                'style-filled': props.type === 'filled' || props.type == undefined,
                'style-outlined': props.type === 'outlined',
                'style-text': props.type === 'text',
                'shape-square': props.shape === 'square' || props.shape == undefined,
                'shape-round': props.shape === 'round',
                'shape-circle': props.shape === 'circle',
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
            })),
            btnDivButtonClass: computed(() => ({
                'btn-div-button': true,
                'style-filled': props.type === 'filled' || props.type == undefined,
                'style-outlined': props.type === 'outlined',
                'style-text': props.type === 'text',
                'shape-square': props.shape === 'square' || props.shape == undefined,
                'shape-round': props.shape === 'round',
                'shape-circle': props.shape === 'circle',
                'size-extra-small': props.size === 'xs',
                'size-small': props.size === 'sm',
                'size-medium': props.size === 'md' || props.size == undefined,
                'size-large': props.size === 'lg',
                'size-extra-large': props.size === 'xl',
                'size-extra-extra-large': props.size === 'xxl',           
            })),
            btnSpanLabelClass: computed(() => ({
                'btn-span-label': true,
                'style-filled': props.type === 'filled' || props.type == undefined,
                'style-outlined': props.type === 'outlined',
                'style-text': props.type === 'text',
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
            })),
            btnSpanIconClass: computed(() => ({
                'btn-span-icon': true,
            }))
        }
    },
    methods:{
        event_click(){
            console.log('btn', 'click', this.click)

            if(this.click != undefined){
                this.click()
            }
        }
    },    
}
</script>