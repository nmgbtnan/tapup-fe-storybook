import type { Meta, StoryObj } from '@storybook/react';
import { SigninForm } from "@/components/auth/SigninForm";
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof SigninForm> = {
  title: "components/auth/SigninForm",
  component: SigninForm,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
};

export default meta;
type Story = StoryObj<typeof SigninForm>;

export const Default: Story = {};