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
            <span :class="btnSpanIconClass" v-if="icon">
                <slot name="icon"></slot>
            </span>
            <span :class="btnSpanLabelClass" v-if="text == undefined || text === 'true'">{{ label }}</span>
        </div>
    </div>
</template>

<script>
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
    computed: {
        btnDivContainerClass(){
            var strClass = 'btn-div-container'
            if(this.type == undefined || this.type === 'filled') strClass += ' style-filled'
            if(this.type === 'outlined') strClass += ' style-outlined'
            if(this.type === 'text') strClass += ' style-text'
            if(this.shape == undefined || this.shape === 'square') strClass += ' shape-square'
            if(this.shape === 'round') strClass += ' shape-round'
            if(this.shape === 'circle') strClass += ' shape-circle'
            if(this.size == undefined || this.size === 'md') strClass += ' size-medium'
            if(this.size === 'xs') strClass += ' size-extra-small'
            if(this.size === 'sm') strClass += ' size-small'
            if(this.size === 'lg') strClass += ' size-large'
            if(this.size === 'xl') strClass += ' size-extra-large'
            if(this.size === 'xxl') strClass += ' size-extra-extra-large'
            if(this.color == undefined || this.color === 'primary') strClass += ' color-primary'
            if(this.color === 'secondary') strClass += ' color-secondary'
            if(this.color === 'accent') strClass += ' color-accent'
            if(this.color === 'error') strClass += ' color-error'
            if(this.color === 'info') strClass += ' color-info'
            if(this.color === 'success') strClass += ' color-success'
            if(this.color === 'warning') strClass += ' color-warning'
            return strClass;
        },
        btnDivButtonClass() {
            var strClass = 'btn-div-button'
            if(this.type == undefined || this.type === 'filled') strClass += ' style-filled'
            if(this.type === 'outlined') strClass += ' style-outlined'
            if(this.type === 'text') strClass += ' style-text'
            if(this.shape == undefined || this.shape === 'square') strClass += ' shape-square'
            if(this.shape === 'round') strClass += ' shape-round'
            if(this.shape === 'circle') strClass += ' shape-circle'
            if(this.size == undefined || this.size === 'md') strClass += ' size-medium'
            if(this.shape === 'xs') strClass += ' size-extra-small'
            if(this.shape === 'sm') strClass += ' size-small'
            if(this.shape === 'lg') strClass += ' size-large'
            if(this.shape === 'xl') strClass += ' size-extra-large'
            if(this.shape === 'xxl') strClass += ' size-extra-extra-large'
            return strClass;
        },
        btnSpanLabelClass() {
            var strClass = 'btn-span-label'
            if(this.type == undefined || this.type === 'filled') strClass += ' style-filled'
            if(this.type === 'outlined') strClass += ' style-outlined'
            if(this.type === 'text') strClass += ' style-text'
            if(this.shape == undefined || this.shape === 'square') strClass += ' shape-square'
            if(this.shape === 'round') strClass += ' shape-round'
            if(this.shape === 'circle') strClass += ' shape-circle'
            if(this.size == undefined || this.size === 'md') strClass += ' size-medium'
            if(this.size === 'xs') strClass += ' size-extra-small'
            if(this.size === 'sm') strClass += ' size-small'
            if(this.size === 'lg') strClass += ' size-large'
            if(this.size === 'xl') strClass += ' size-extra-large'
            if(this.size === 'xxl') strClass += ' size-extra-extra-large'
            if(this.color == undefined || this.color === 'primary') strClass += ' color-primary'
            if(this.color === 'secondary') strClass += ' color-secondary'
            if(this.color === 'accent') strClass += ' color-accent'
            if(this.color === 'error') strClass += ' color-error'
            if(this.color === 'info') strClass += ' color-info'
            if(this.color === 'success') strClass += ' color-success'
            if(this.color === 'warning') strClass += ' color-warning'
            return strClass;
        },
        btnSpanIconClass() {
            return 'btn-span-icon'
        }        
    },
    methods:{
        event_click(){
            console.log('btn', 'click', this.click)

            if(this.click != undefined){
                this.click()
            }
        }
    }
}
</script>