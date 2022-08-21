import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { Viewer } from '../components/Viewer';

export default () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Login</h1>
        <h1 className="text-sm font-bold text-slate-500">This is an ugly placeholder login please select register</h1>
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="grid grid-cols-3 gap-6">
            <FormInput label="Username" value={username} onChange={setUsername} />
            <FormInput label="Password" value={password} onChange={setPassword} />
          </div>
        </div>
        <span>Don't have an account? <Link to="/register" className="underline">Register Now</Link></span>
      </div>
    </>
  );
}
