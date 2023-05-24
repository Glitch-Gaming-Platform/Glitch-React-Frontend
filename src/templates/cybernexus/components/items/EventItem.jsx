import { Config, Events } from "invirtu-javascript-api" 
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Auth } from "invirtu-javascript-api"
import Glitch from 'glitch-javascript-sdk';
Config.setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODMwMDc1NjksImV4cCI6MTc3MzAwNzU2OSwiaXNzIjoibG9jYWxob3N0IiwicmVmZXJlbmNlX2lkIjoiZTc3OTUzNzItZWU1ZC00NzAyLWE4MmYtOWE5NGYxNTg0M2JiIiwidHlwZSI6ImRpc3RyaWJ1dG9yIiwiZGlkIjoiYWViMjhiOWItNGZjNS00NGU2LTgzNjAtZTlkYzA1NGFhNzI1In0._aSEeMmcq2TS1Gx3U1a3Z6vbb48chEvc2dkT8Fo6zQY");

const EventItem = (props) =>{
    let data = {
        organizer_id : "aeb28b9b-4fc5-44e6-8360-e9dc054aa725",
      };
      
      //Get list of events create comp then get id in Convos
      Events.getEvents(data).then(response=>{
        let result = response.data;

        if(result.status === "success"){
           data = result.data;
           console.log(data);
        } else {
          let errors = result.errors;
          console.log(errors);
        }
      
      }).catch(error => {
        console.log(error);
      });

}
export default EventItem;