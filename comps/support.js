// import React, { useState } from "react";
// import { Motion, spring } from "react-motion";

// const BuyMeCoffeeButton = () => {
//   const [isAnimated, setIsAnimated] = useState(false);

//   const buttonStyle = {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: "#ff0000", // This is a number.
//     cursor: "pointer",
//   };

//   const buttonAnimation = {
//     x: spring(0, {
//       damping: 5,
//       mass: 1,
//       stiffness: 100,
//     }),
//     y: spring(0, {
//       damping: 5,
//       mass: 1,
//       stiffness: 100,
//     }),
//   };

//   const button = () => (
//     <button>Buy Me Coffee</button>
//   );

//   return (
//     <Motion
//       animate={isAnimated}
//       initial={buttonAnimation}
//       style={buttonStyle}
//       onUpdate={() => setIsAnimated(true)}
//     >
//       {button()}
//     </Motion>
//   );
// };

// export default BuyMeCoffeeButton;




import { useState } from 'react';

const BuyMeCoffeeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: isHovered ? '#FDCB6E' : '#FEEFB3',
    boxShadow: isHovered ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  };

  const imageStyles = {
    width: '30px',
    height: '30px',
  };

  return (
    <div
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="https://www.buymeacoffee.com/your-profile" target="_blank" rel="noopener noreferrer">
        <img
          src="/coffee-icon.png"
          alt="Buy Me a Coffee"
          style={imageStyles}
        />
      </a>
    </div>
  );
};

export default BuyMeCoffeeButton;