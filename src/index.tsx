import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

interface Page {
  title: string,
  path: string,
  element: React.ReactElement,
  displayInNav?: boolean,
}

const pages: Page[] = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
  },
  {
    title: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    title: "Register",
    path: "/register",
    element: <Register />,
    displayInNav: false,
  }
].reverse()

const App = () => {
  const location = useLocation();
  const routes = pages.map(page => <Route key={page.path} path={page.path} element={page.element} />);

  const links = pages.filter(page => page.displayInNav !== undefined ? page.displayInNav : true).map(page => {
    const selected = location.pathname === page.path;
    const classes = selected ? "underline" : "";
    return <Link key={page.path} className={classes} to={page.path}>{page.title}</Link>
  });

  return (
    <div className="container mx-auto my-2 py-3">
      <div className="flex flex-row justify-left gap-6 mb-12">
        <h1 className="text-2xl font-bold">Ipv8</h1>
        <div className="grow flex flex-row-reverse gap-6">
          {links}
        </div>
      </div>
      <Routes>
        {routes}
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
