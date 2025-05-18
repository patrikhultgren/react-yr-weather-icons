import type { Meta, StoryObj } from "@storybook/react";

import YrWeatherIcon from "../components/YrWeatherIcon";

const meta = {
  component: YrWeatherIcon,
  title: "YrWeatherIcon",
} satisfies Meta<typeof YrWeatherIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    symbolCode: "snowshowers_day",
  },
};
