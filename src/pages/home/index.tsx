import { Button } from "antd";
import React, { useSyncExternalStore } from "react";
import store from "@/store";

const Home = () => {
  const num = useSyncExternalStore(
    store.subscribe,
    () => store.getSnapshot().data
  );

  return (
    <>
      <div>{num}</div>
      <Button type="primary" onClick={() => store.dispatch({ type: "ADD" })}>
        add
      </Button>
    </>
  );
};
export default Home;
