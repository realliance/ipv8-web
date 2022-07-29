import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EndpointBlock from '../components/EndpointBlock';
import FormInput from '../components/FormInput';
import RouteCard, { RouteVerb } from '../components/RouteCard';
import { Viewer } from '../components/Viewer';

const register = () => (
  <>
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-4">Register Now!</h1>
      <EndpointBlock endpoint="login.nightly.ipv8.dev" title="Login Endpoint">
        <RouteCard verb={RouteVerb.POST} description="Registers a new unlicensed user" path="/register" />
        <RouteCard verb={RouteVerb.POST} authorized description="Authenticates a user" path="/login" />
        <RouteCard verb={RouteVerb.GET} authorized description="Retrieves information about a user" path="/user" />
      </EndpointBlock>
    </div>
  </>
);

export default register;
