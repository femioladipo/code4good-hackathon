import React from 'react';
import BarGraph from './BarGraph';
import AreaChart from './AreaChart';

export default function index() {
  return (
    <div>
      <h2 className="display-3">Hi, John Doe!</h2>
      <p>
        Here are this months insights, check back regularlry for suggestions on
        how to imporve you working life.
      </p>
      <div className="d-flex flex-row justify-content-around">
        <div className="card">
          <BarGraph />
          <h3>Working with others.</h3>
        </div>

        <div className="card centered">
          <AreaChart />
          <h3>Your mood throughout the week.</h3>
        </div>
      </div>
      <br />
      <p>
        Monday's are a tough time for us all, try starting your day a little
        later giving you time to prepare for the week ahead.
      </p>
    </div>
  );
}
