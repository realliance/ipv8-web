import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";

import Home from './pages/Home';

interface Page {
  title: string,
  path: string,
  element: React.ReactElement
}

const pages: Page[] = [
  {
    title: "Home",
    path: "/",
    element: <Home />
  }
]

const App = () => {
  const location = useLocation();
  const routes = pages.map(page => <Route key={page.path} path={page.path} element={page.element} />);

  const links = pages.map(page => {
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
