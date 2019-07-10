import * as React from "react";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { themeSuccess } from "../../../design-tokens/build/js/designTokens";

const SuccessText = (props: BasicTextProps) => (
  <Text color={themeSuccess} {...props} />
);

SuccessText.defaultProps = {
  align: "left",
  weight: "normal",
  size: "m",
  wrap: "wrap",
  tag: "p"
};

export default SuccessText;
