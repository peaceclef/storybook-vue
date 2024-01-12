import Password from '@/components/vue3_v0.1/core/Password.vue'

export default {
    title: 'core_v0.1(vue3)/Password',
    component: Password,
    tags: ['autodocs'],
    argTypes: {
        size: {
            description: 'Password 크기를 설정합니다.',
            table: {
              type: {summary: '선택 (xs, sm, md, lg, xl, xxl)'}
            },
            control: {
              type: 'select',
            },
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
          },
          shape: {
              description: 'Password 모양를 설정합니다.',
              table: {
                type: {summary: '선택 (square, round, circle)'}
              },
              control: {
                type: 'select'
              },
              options: ['square', 'round', 'circle'],
          },        
          color: {
            description: 'Password 색상을 설정합니다.',
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
        value: 'Input'
    }
}

export const ExtraSmall = {
    args: {
      value: 'Input',
      size: 'xs',    
    },
  };
  
  export const Small = {
    args: {
      value: 'Input',
      size: 'sm',    
    },
  };
  
  export const Medium = {
    args: {
      value: 'Input',
      size: 'md',
    },
  };
  
  export const Large = {
    args: {
      value: 'Input',
      size: 'lg',
    },
  };
  
  export const ExtraLarge = {
    args: {
      value: 'Input',
      size: 'xl',
    },
  };
  
  export const ExtraExtraLarge = {
    args: {
      value: 'Input',
      size: 'xxl',
    },
  };

  export const Primary = {
    args: {
      value: 'Input',
      size: 'md',
      color: 'primary'
    },
  };
  
  export const Secondary = {
    args: {
      value: 'Input',
      size: 'md',
      color: 'secondary'
    },
  };
  
  export const Accent = {
    args: {
      value: 'Input',
      size: 'md',
      color: 'accent'
    },
  };
  
  export const Error = {
    args: {
      label: 'Chip',
      size: 'md',
      color: 'error'
    },
  };
  
  export const Info = {
    args: {
      value: 'Input',
      size: 'md',
      color: 'info'
    },
  };
  
  export const Success = {
    args: {
      value: 'Input',
      size: 'md',
      color: 'success'
    },
  };
  
  export const Warning = {
    args: {
      value: 'Input',
      size: 'md',
      color: 'warning'
    },
  };