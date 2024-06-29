import type { Meta, StoryObj } from "@storybook/react";
import Dashboard from "@/app/(dashboard)/dashboard/page";

const meta = {
  title: "Components/Dashboard",
  component: Dashboard,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dashboard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
