import React, { useEffect, useState } from "react";
import useDelayUnmount from "./hooks/useDelayUnmount";
import "./App.css";

type TitleProps = {
  mounted: boolean;
};

const Title: React.FC<TitleProps> = ({ mounted }) => {
  return <h1 className={mounted ? "mount" : "unmount"}>Hello World!</h1>;
};

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const shouldRenderChild = useDelayUnmount(mounted, 500);
  console.log("shouldRenderChild", shouldRenderChild);

  const handleClick = () => {
    setMounted((prev) => !prev);
  };
  return (
    <main>
      {shouldRenderChild && <Title mounted={mounted} />}
      <button onClick={handleClick}>Mount Title</button>
    </main>
  );
};

export default App;
