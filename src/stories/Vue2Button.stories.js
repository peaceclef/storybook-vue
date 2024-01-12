import Button from '@/components/vue2_v0.1/core/Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'core_v0.1(vue2)/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label:{
      description: 'Button 텍스트 라벨을 설정합니다.',
      table: {
        type: {summary: 'String'}
      }
    },
    type: {
      description: 'Button 형태를 설정합니다.',
      table: {
        type: {summary: '선택 (filled, outlined, text)'}
      },
      control: {
        type: 'select',
      },
      options: ['filled', 'outlined', 'text'],
    },
    shape: {
      description: 'Button 모양을 설정합니다.',
      table: {
        type: {summary: '선택 (xs, sm, md, lg, xl, xxl)'}
      },
      control: {
        type: 'select'
      },
      options: ['square', 'round', 'circle'],
    },
    size: {
      description: 'Button 크기를 설정합니다.',
      table: {
        type: {summary: '선택 (square, round, circle)'}
      },
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    icon: {
      description: 'Button 아이콘 사용여부를 설정합니다.',
      control: {
        type: 'boolean'
      }
    },
    text: {
      description: 'Button 텍스트 라벨 사용여부를 설정합니다.',
      control: {
        type: 'boolean'
      }
    },
    color: {
      description: 'Button 색상을 설정합니다.',
      table: {
        type: {summary: '선택 (primary, secondary, accent, error, info, success, warning)'}
      },
      control: {
        type: 'select',        
      },
      options: ['primary', 'secondary',  'accent', 'error', 'info', 'success', 'warning']
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Filled = {
  args: {
    label: 'Button',
    type: 'filled'
  }
}

export const Outlined = {
  args: {
    label: 'Button',
    type: 'outlined'
  }
}

export const Text = {
  args: {
    label: 'Button',
    type: 'text'
  }
}

export const square = {
  args: {
    label: 'Button',
    type: 'filled',
    shape: 'square'
  },
};

export const round = {
  args: {
    label: 'Button',
    type: 'filled',
    shape: 'round'
  },
};

export const circle = {
  args: {
    label: 'Button',
    type: 'filled',
    shape: 'circle'
  },
};

export const ExtraSmall = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'xs',    
  },
};

export const Small = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'sm',    
  },
};

export const Medium = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'md',
  },
};

export const Large = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'lg',
  },
};

export const ExtraLarge = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'xl',
  },
};

export const ExtraExtraLarge = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'xxl',
  },
};

export const Primary = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'md',
    color: 'primary'
  },
};

export const Secondary = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'md',
    color: 'secondary'
  },
};

export const Accent = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'md',
    color: 'accent'
  },
};

export const Error = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'md',
    color: 'error'
  },
};

export const Info = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'md',
    color: 'info'
  },
};

export const Success = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'md',
    color: 'success'
  },
};

export const Warning = {
  args: {
    label: 'Button',    
    type: 'filled',
    shape: 'square',
    size: 'md',
    color: 'warning'
  },
};