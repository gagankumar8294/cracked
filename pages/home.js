import React, { useState } from 'react';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        style={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' ,
          // transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer',
          background: 'yellow',
          border: 'none',
        }}
        onClick={togglePanel}
      >
        {isOpen ? <span>&#94;</span> : <span>&gt;</span>}
      </button>
      {isOpen && (
        <div
          style={{
            // maxHeight: isOpen ? '25vh' : '0',
            // opacity: isOpen ? '1' : '0',
            // transition: 'max-height 0.3s ease, opacity 0.3s ease',
            // overflow: 'hidden',
            // backgroundColor: 'rgba(255, 255, 255, 0.5)',
            // width: '25%',
            // // marginBottom: '50px',
            // paddingBottom: '30%',
            // textAlign: 'center',
            maxHeight: isOpen ? '25vh' : '0',
        opacity: isOpen ? '1' : '0',
        transition: 'max-height 0.3s ease, opacity 0.3s ease',
        overflowY: 'scroll', // Add this line
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '25%',
        paddingBottom: '30%',
        textAlign: 'center',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Your list items go here */}
          <h4>Yo Yo ...</h4>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
          <h3>list list list list</h3>
        </div>
      )}
    </div>
  );
};

export default HomePage;