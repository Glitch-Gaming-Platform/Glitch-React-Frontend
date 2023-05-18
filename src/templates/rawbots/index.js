import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import  Glitch  from 'glitch-javascript-sdk';


import Home from './pages/misc/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import Streams from './pages/streams';
import StreamsView from './pages/streams/view';
import StreamsCreate from './pages/streams/create';
import StreamsManage from './pages/streams/manage';

import Competitions from './pages/competitions';
import CompetitionsView from './pages/competitions/view';
import CompetitionsCreate from './pages/competitions/create';
import CompetitionsManage from './pages/competitions/manage';
import CompetitionsUpdate from './pages/competitions/update';

import CompetitionsVenuesCreate from './pages/competitions/venue_create';
import CompetitionsVenuesView from './pages/competitions/venues_view';
import CompetitionsVenuesUpdate from './pages/competitions/venue_update';

import Teams from './pages/teams';
import TeamsCreate from './pages/teams/create';
import TeamsView from './pages/teams/view';

import Posts from './pages/community/index';

import Profile from './pages/users/profile';
import Users from './pages/users/index';

import Chat from './pages/chat';

/*import "react-datetime/css/react-datetime.css";
import "cropperjs/dist/cropper.css";
import 'react-tabs/style/react-tabs.css';*/

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import Router from './util/Router';
import Routes from './constants/Routes';
import CompetitionsVenues from './pages/competitions/venues';

console.log("Base URL", process.env.REACT_APP_API_URL)
Glitch.config.Config.setBaseUrl(process.env.REACT_APP_API_URL, true);

if(Glitch.util.Session.getAuthToken()) {
  Glitch.config.Config.setAuthToken(Glitch.util.Session.getAuthToken());
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/streams",
    element: <Streams />,
  },
  {
    path: Routes.streams_view,
    element: <StreamsView />,
  },
  {
    path: Routes.streams_manage,
    element: <StreamsManage />,
  },
  {
    path: Routes.streams_create,
    element: <StreamsCreate />,
  },
  {
    path: Routes.competitions_index,
    element: <Competitions />,
  },
  {
    path: Routes.competitions_view,
    element: <CompetitionsView />,
  },
  {
    path: Routes.competitions_create,
    element: <CompetitionsCreate />,
  },
  {
    path: Routes.competitions_update,
    element: <CompetitionsUpdate />,
  },
  {
    path: Routes.competitions_manage,
    element: <CompetitionsManage />,
  },
  {
    path: Routes.competitions_venues,
    element: <CompetitionsVenues />,
  },
  {
    path: Routes.competitions_venues_view,
    element: <CompetitionsVenuesView />,
  },
  {
    path: Routes.competitions_venues_create,
    element: <CompetitionsVenuesCreate />,
  },
  {
    path: Routes.competitions_venues_update,
    element: <CompetitionsVenuesUpdate />,
  },
  {
    path: Routes.teams_index,
    element: <Teams />,
  },
  {
    path: Routes.teams_view,
    element: <TeamsView />,
  },
  {
    path: Routes.teams_create,
    element: <TeamsCreate />,
  },
  {
    path: '/community',
    //path: Routes.community_index,
    element: <Posts />,
  },
  {
    path: Routes.profile,
    element: <Profile />,
  },
  {
    path: Routes.userFriends,
    element: <Users />,
  },
  {
    path: Routes.chat,
    element: <Chat />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

