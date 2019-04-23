import React from 'react';
import { AreaChart } from 'react-easy-chart';

export default function AChart() {
  return (
    <div>
      {/* <AreaChart
        yType={'text'}
        xType={'text'}
        axes
        margin={{ top: 100, right: 5, bottom: 50, left: 5 }}
        xDomainRange={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
        yDomainRange={['Allot', 'Middle', 'Little']}
        interpolate={'cardinal'}
        width={300}
        height={500}
        data={[
          [
            { x: 'Mon', y: 'Little' },
            { x: 'Tue', y: 'Perfect' },
            { x: 'Wed', y: 'Allot' },
            { x: 'Thu', y: 'Little' },
            { x: 'Fri', y: 'Perfect' }
          ]
        ]}
      /> */}
      <AreaChart
        axes
        xDomainRange={[0, 100]}
        yDomainRange={[0, 100]}
        margin={{ top: 100, right: 5, bottom: 50, left: 5 }}
        width={750}
        height={500}
        interpolate={'cardinal'}
        data={[
          [
            { x: 10, y: 25 },
            { x: 20, y: 10 },
            { x: 30, y: 25 },
            { x: 40, y: 10 },
            { x: 50, y: 12 },
            { x: 60, y: 25 }
          ],
          [
            { x: 10, y: 40 },
            { x: 20, y: 30 },
            { x: 30, y: 25 },
            { x: 40, y: 60 },
            { x: 50, y: 22 },
            { x: 60, y: 9 }
          ]
        ]}
      />
    </div>
  );
}
