import type { Meta, StoryObj } from "@storybook/react";
import SignupForm from "@/components/auth/SignupForm";

const meta = {
  title: "UI/SignupForm",
  component: SignupForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignupForm>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
