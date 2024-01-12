<template>
    <div :class="sltDivContainerClass">
        <select :class="sltSelectClass">
            <template v-if="init != undefined">
                <option value="">
                    {{ init }}
                </option>
            </template>    
            <template v-for="(item, idx) in option" :key="idx">
                <option :value="item.code" v-if="selected === item.code" selected="selected">
                    {{ item.value }}
                </option>
                <option :value="item.code" v-else>
                    {{ item.value }}
                </option>
            </template>
        </select>
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
    name: 'Select',
    props: {
        option: {
            type: Array,
            required: true,
        },
        init: {
            type: String
        },
        selected: {
            type: String
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
        init: {

        },
        selected: {

        },
        input: {
            
        }
    },
    setup(props){
        props = reactive(props);
        return {
            sltDivContainerClass: computed(() => ({
                'slt-div-container': true,
                'size-extra-small': props.size === 'xs',
                'size-small': props.size === 'sm',
                'size-medium': props.size === 'md' || props.size == undefined,
                'size-large': props.size === 'lg',
                'size-extra-large': props.size === 'xl',
                'size-extra-extra-large': props.size === 'xxl',
            })),
            sltSelectClass: computed(() => ({
                'slt-select': true,
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
}
</script>