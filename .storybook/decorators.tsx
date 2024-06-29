import React from "react";
import { Decorator } from "@storybook/react";

export const withMaxWidth: Decorator = (Story) => {
  // console.log(context);  //include 'context' beside the (Story)
  return <div
    style={{
      maxWidth: "400px",
      margin: "0 auto",
      border: "1px solid black",
    }}>
      <Story />
    </div>
};

export const globalDecorators = [
  // use the following section incase you want to apply a decorator to all stories
  // (Story) => <div> Hello Garci <Story /></div>,
  // withMaxWidth,
]