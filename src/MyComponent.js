import * as React from "react";
import { Button } from "react-uwp";

export default class MyComponent extends React.Component<void> {
  render() {
    return (
      <Button tooltip="Mini Tooltip" >
                   Tooltip Button
        </Button>
    )
  }
}