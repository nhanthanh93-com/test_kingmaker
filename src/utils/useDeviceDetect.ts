import React from "react";
import { useWindowDimensions, breakpoint } from "./resposive";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);
  const { width } = useWindowDimensions();

  React.useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    if (!width) return;
    switch (true) {
      case width <= breakpoint[2]:
        setMobile(true);
        break;
      case mobile:
        setMobile(!!(width <= breakpoint[2]));
        break;
      case width <= breakpoint[8]:
        setMobile(false);
        break;
      default:
        setMobile(false);
        break;
    }
  }, [width]);

  return { isMobile };
}
