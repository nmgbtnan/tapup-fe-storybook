import type { Meta, StoryObj } from "@storybook/react";
import Dashboard from "@/app/(dashboard)/dashboard/page";

const meta = {
  title: "UI/Dashboard",
  component: Dashboard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dashboard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
