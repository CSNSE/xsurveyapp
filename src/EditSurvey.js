import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { NavBar, SurveyUpdateForm } from "./ui-components";
import { API, Storage } from "aws-amplify";
import "./App.css";
import { getSurvey } from "./graphql/queries";
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
            await API.graphql({
              query: getSurvey.replaceAll("__typename", ""),
              variables: { id: cid },
            })
          )?.data?.getSurvey
        : cr;
        if (record.image) {
          record.filename = record.image
          const url = await Storage.get(record.image);
          record.image = url;
          }
        setMe(record);
    };
    queryData();
  }, [cid, cr]);



  return (
    <div>
      <header className="App-header">
        <NavBar />
        <SurveyUpdateForm nx={cr} />
      </header>
    </div>
  );
}

export default EditSurvey;