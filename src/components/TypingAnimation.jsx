import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
  return (
    <div className="text-left text-secondry text-3xl font-bold">
      <TypeAnimation
        sequence={[
          'Frontend developer', 2000,
          'React Developer', 2000,
          'MERN Stack Developer', 2000,
          'Coder', 2000,
        ]}
        speed={50}
        repeat={Infinity}
        wrapper="span"
        cursor={true}
        className="text-secondry"
      />
    </div>
  );
};

export default TypingAnimation;
