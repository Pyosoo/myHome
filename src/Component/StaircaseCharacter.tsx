import React, { useState, useEffect } from "react";

const StaircaseCharacter: React.FC = () => {
  const [characterPosition, setCharacterPosition] = useState(0);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      setCharacterPosition((prevPosition) => Math.max(prevPosition - 1, 0));
    } else if (event.key === "ArrowRight") {
      setCharacterPosition((prevPosition) => Math.min(prevPosition + 1, 9));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // 화면 높이에 맞춰 꽉차게 설정
      }}
    >
      <div style={{ position: "relative", width: "200px", height: "200px" }}>
        <div
          style={{
            width: "100px",
            height: "2px",
            backgroundColor: "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            style={{
              width: "2px",
              height: "2px",
              backgroundColor:
                index * 2 <= characterPosition ? "red" : "transparent",
              position: "absolute",
              top: `${index * 20 - 1}%`,
              left: `${index % 2 === 0 ? "0" : "100"}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StaircaseCharacter;
