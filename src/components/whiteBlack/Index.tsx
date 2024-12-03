import React, { useEffect, useState } from "react";
import WhiteBlack from "./WhiteBlack";

const Index = () => {
  const [result, setResult] = useState<string[]>([]);

  const value = 100;
  useEffect(() => {
    const handleLogic = () => {
      const newResult: string[] = [];
      for (let i = 0; i < value; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          newResult.push("white-black");
        } else if (i % 3 === 0) {
          newResult.push("white");
        } else if (i % 5 === 0) {
          newResult.push("black");
        } else {
          newResult.push(`${i}`);
        }
      }
      setResult(newResult); // Update the result state with the new array
    };
    handleLogic();
  }, [value]); // Run the effect when 'value' changes

  return (
    <div>
      <WhiteBlack result={result} />
    </div>
  );
};

export default Index;
