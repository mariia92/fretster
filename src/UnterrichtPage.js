import React from 'react';
import Stage from './components/Stage';
import "./App.css";

const Page = ({navigationButtons, currentPage, navigationHook}) => {
  return (
    <>
      <Stage
        navigationButtons={navigationButtons}
        navigationHook={navigationHook}
      />
      <div className="imageWrapper" />
    </>
  );
};
export default Page;
