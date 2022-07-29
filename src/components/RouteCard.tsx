import React from 'react';

export enum RouteVerb {
  GET = "GET",
  POST = "POST"
}

const getRouteVerbBgColor = (verb: RouteVerb) => {
  switch (verb) {
    case RouteVerb.GET: return "bg-green-50";
    case RouteVerb.POST: return "bg-blue-50";
  }
}

const getRouteVerbTagColor = (verb: RouteVerb) => {
  switch (verb) {
    case RouteVerb.GET: return "bg-green-600";
    case RouteVerb.POST: return "bg-blue-600";
  }
}

interface RouteCardProps {
  verb: RouteVerb,
  path: string,
  description: string,
  authorized?: boolean,
}

const RouteCard = ({ verb, path, description, authorized }: RouteCardProps) => {
  return (
    <div className={`rounded ${getRouteVerbBgColor(verb)} w-100 flex my-1 flex-row p-3 border-2 content-center`}>
      <div className={`mx-5 ${getRouteVerbTagColor(verb)} text-white font-bold text-lg rounded px-4 py-1`}>{verb}</div>
      <div className="mx-5 font-bold text-lg py-1 font-mono">{path}</div>
      <div className="mx-5 text-lg py-1 text-slate-600">{description}</div>
      { authorized ? <div className="mx-5 bg-slate-500 text-white font-bold text-xs rounded px-2 flex items-center justify-center">Requires Authorization Header</div> : null }
    </div>
  );
}

export default RouteCard;
