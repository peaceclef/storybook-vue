import Select from '@/components/vue3_v0.1/core/Select.vue'

export default {
    title: 'core_v0.1(vue3)/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        option: {
            description: '데이터를 설정합니다.',
            table: {
                type: {summary: '선택'}
            },
            control: {
                type: 'select',
            },
            options: [
                [{code:'01', value:'테스트1'}, {code:'02', value:'테스트2'}]
            ],
        },
        size: {
            description: 'Select 크기를 설정합니다.',
            table: {
              type: {summary: '선택 (xs, sm, md, lg, xl, xxl)'}
            },
            control: {
              type: 'select',
            },
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
          },
        shape: {
              description: 'Select 모양를 설정합니다.',
              table: {
                type: {summary: '선택 (square, round, circle)'}
              },
              control: {
                type: 'select'
              },
              options: ['square', 'round', 'circle'],
          },        
          color: {
            description: 'Select 색상을 설정합니다.',
            table: {
              type: {summary: '선택 (primary, secondary, accent, error, info, success, warning)'}
            },
            control: {
              type: 'select',        
            },
            options: ['primary', 'secondary',  'accent', 'error', 'info', 'success', 'warning']
          }
    }
}

export const Default = {
    args: {
        size: 'md',
        shape: 'square',
        color: 'primary',
        options: [{code:'01', value:'테스트1'}, {code:'02', value:'테스트2'}]
    }
}