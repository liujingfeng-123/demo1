import React, { useState, useSyncExternalStore } from "react";
import "./style.less";
import { Button, Select } from "antd";
import store from "@/store";
const Login = () => {
  const [state, setState] = useState<string>("");
  const num = useSyncExternalStore(
    store.subscribe,
    () => store.getSnapshot().data
  );

  return (
    <>
      <div className="aa">{state || "-"}</div>
      <Select
        value={state}
        style={{ width: 120 }}
        onChange={setState}
        options={[
          { label: "lucy", value: 1 },
          { label: "lucy2", value: 2 },
          { label: "lucy3", value: 3 },
          { label: "lucy4", value: 4 },
        ]}
      />
      <div>{num}</div>
      <Button onClick={() => store.dispatch({ type: "ADD" })}>add</Button>
    </>
  );
};
export default Login;
