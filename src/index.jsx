import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Child from "./Child";
import Suspense from "./Suspense";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Count from './Count';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>root error!</div>
  },
  {
    path: "/child",
    element: <Child />
  },
  {
    path: "/count",
    element: <Count />
  },
  {
    path: "/suspense",
    element: <Suspense />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
