import React, { Suspense, useContext } from "react";
import ApplicationState from "./applicationState";
import ApplicationList from "./ApplicationList";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { myApplicationPromise } from "../../api/applicationApi";


const Myapplications = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <ApplicationState></ApplicationState>
      <Suspense fallback={"loading user applications"}>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default Myapplications;
