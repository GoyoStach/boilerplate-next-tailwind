import React from 'react';

type Props = {};

const loading = (props: Props) => {
  return (
    <div style={{ width: '100%', height: '500px', backgroundColor: 'red' }}>
      Loading Global
    </div>
  );
};

export default loading;
