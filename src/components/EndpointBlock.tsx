import React from 'react';

interface EndpointBlockProps {
  title: string,
  endpoint: string,
  children: JSX.Element | JSX.Element[],
}

const EndpointBlock = ({ title, endpoint, children }: EndpointBlockProps) => {
  return (
    <div className={`rounded bg-white shadow-md w-100 flex flex-col p-3 border-2 content-center`}>
      <h1 className="text-2xl font-bold my-1">{title}</h1>
      <h2 className="font-mono text-xl my-1">{endpoint}</h2>
      {children}
    </div>
  );
}

export default EndpointBlock;
