import React, {Suspense as SuspenseReact} from "react";
import Loading from "../Components/Loading";

function Suspense({ children }) {
  return (
    <SuspenseReact fallback={<Loading />}>
      {children}
    </SuspenseReact>
  );
}

export default Suspense;
