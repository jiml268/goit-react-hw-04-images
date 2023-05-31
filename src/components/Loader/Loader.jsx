import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import '../styles.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
       <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#3f51b5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: 'auto' }}
      wrapperClassName=""
      visible={true}
    />
    </div>
  );
};

export default Loader;



