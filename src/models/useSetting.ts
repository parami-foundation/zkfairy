import { useState } from "react";

export default () => {
  const [headerTab, setHeaderTab] = useState<string>("home");

  return {
    headerTab,
    setHeaderTab,
  };
};