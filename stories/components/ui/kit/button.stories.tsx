import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { Button } from "@/components/ui/kit/button";

const meta = {
  title: "ui/kit/button",
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    viewport: {
      disable: true
    },
  },
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    //   description: 'Background color of the button',
    // },
    // variant: {
    //   control: 'select',
    //   description: 'Button variants',
    //   options: [
    //     'default',
    //     'destructive',
    //     'outline',
    //     'secondary',
    //     'ghost',
    //     'link',
    //   ],
    // },
    size: {
      control: 'select',
      description: 'Button sizes',
      options: [
        'default',
        'sm',
        'lg',
        'icon',
      ],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'onClick',
      description: 'Function called when the default button is clicked',
    },
    children: {
      control: 'text',
      description: 'Content to be displayed inside the button',
    },
    className: {
      control: 'text',
      description: 'Custom tailwind CSS classes to be applied to the button',
    },
  },

  // args: {
  //   onClick: fn(),
  //   label: 'Hello garci',
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    // variant: 'default',
    size: 'lg',
    disabled: false,
    onClick: action('default click'),
    children: 'Default Button',
    className: 'shadow-lg bg-green-600 text-white',
  }
}

export const Primary: Story = {
  args: {
    // variant: 'default',
    size: 'lg',
    disabled: false,
    onClick: action('destructive click'),
    children: 'Default Button',
    className: 'shadow-lg',
  }
}

// export const Outline: Story = {
//   args: {
//     variant: 'outline',
//     size: 'lg',
//     disabled: false,
//     onClick: action('outline click'),
//     children: 'Outline Button',
//     className: 'shadow-lg',
//   }
// }

export const Secondary: Story = {
  args: {
    // variant: 'secondary',
    size: 'lg',
    disabled: false,
    onClick: action('secondary click'),
    children: 'Secondary Button',
    className: 'shadow-lg',
  }
}

// export const Ghost: Story = {
//   args: {
//     variant: 'ghost',
//     size: 'lg',
//     disabled: false,
//     onClick: action('ghost click'),
//     children: 'Ghost Button',
//     className: 'shadow-lg',
//   }
// }

// export const Link: Story = {
//   args: {
//     variant: 'link',
//     size: 'lg',
//     disabled: false,
//     onClick: action('link click'),
//     children: 'Link Button',
//     className: 'shadow-lg',
//   }
// }