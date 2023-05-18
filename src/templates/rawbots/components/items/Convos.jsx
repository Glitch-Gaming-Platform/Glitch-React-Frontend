import { BWAPI, Config, Events } from "invirtu-javascript-api" 
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Auth } from "invirtu-javascript-api"
import EventItem from "./EventItem";
import Glitch from 'glitch-javascript-sdk';
Config.setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODMwMDc1NjksImV4cCI6MTc3MzAwNzU2OSwiaXNzIjoibG9jYWxob3N0IiwicmVmZXJlbmNlX2lkIjoiZTc3OTUzNzItZWU1ZC00NzAyLWE4MmYtOWE5NGYxNTg0M2JiIiwidHlwZSI6ImRpc3RyaWJ1dG9yIiwiZGlkIjoiYWViMjhiOWItNGZjNS00NGU2LTgzNjAtZTlkYzA1NGFhNzI1In0._aSEeMmcq2TS1Gx3U1a3Z6vbb48chEvc2dkT8Fo6zQY");

const Convos = (props) =>{
    const [chat, setChat] = useState('');
    let data = {
        organizer_id : "aeb28b9b-4fc5-44e6-8360-e9dc054aa725"
    }

    let { id } = useParams();

   // useEffect(() => {

        Events.getChatMessages(id).then(response => {
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

   // }, []);
        
        
  /*  let { id } = useParams();

    //Get list of events create comp then get id here
    useEffect(() => {

        Events.getChatMessages(id).then(response => {


            console.log(response.data.data);
            setChat(<EventItem id={response.data.data.invirtu_id} />);

        }).catch(error => {

        });

    }, []);

return(
    <div>
        -- CHAT UNDER HERE! --
        {chat}
    </div>
)*/
}
export default Convos;