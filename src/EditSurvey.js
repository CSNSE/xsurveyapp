import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { NavBar, EditForm } from "./ui-components";
import { generateClient } from "aws-amplify/api";
import "./App.css";
import { getSurvey } from "./graphql/queries";
const client = generateClient();
function EditSurvey() {
  return <Put />;
}

function Put() {
  const { cid } = useParams();
  const [cr, setMe] = useState({});
useEffect(() => {
    const queryData = async () => {
      const record = cid
        ? (
            await client.graphql({
              query: getSurvey.replaceAll("__typename", ""),
              variables: { id: cid },
            })
          )?.data?.getSurvey
        : cr;
        console.log("cr: "+cr)
        setMe(record);
    };
    queryData();
  }, [cid, cr]);



  return (
    <div>
      <header className="App-header">
        <NavBar />
        <EditForm survey={cr} />
      </header>
    </div>
  );
}

export default EditSurvey;