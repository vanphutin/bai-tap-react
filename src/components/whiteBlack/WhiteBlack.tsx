import React from "react";

// Define the type for the props
interface WhiteBlackProps {
  result: string[];
}

const WhiteBlack: React.FC<WhiteBlackProps> = ({ result }) => {
  return (
    <div>
      {result && result.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
};

export default WhiteBlack;
