import React from "react";

const MainTank = ({ level }) => {
  const isAlarm = level < 20;
  const isLow = level < 35;

  return (
    <div style={{
      background: "#0d1b2e",
      border: `0.5px solid ${isAlarm ? "#ef4444" : "#1a3050"}`,
      borderRadius: "12px",
      padding: "18px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px"
    }}>
      <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#38bdf8", textTransform: "uppercase" }}>
        Ana Depo
      </div>

      <div style={{
        width: "70px", height: "140px",
        border: "2px solid #1a3050",
        borderRadius: "4px",
        overflow: "hidden",
        background: "#060d18",
        position: "relative"
      }}>
        <div style={{
          position: "absolute", bottom: 0, width: "100%",
          height: `${level}%`,
          background: isAlarm ? "linear-gradient(180deg,#ef4444,#b91c1c)" : "linear-gradient(180deg,#38bdf8,#0369a1)",
          transition: "height 0.8s ease"
        }} />
      </div>

      <div style={{ fontSize: "26px", fontWeight: "700", color: isAlarm ? "#ef4444" : "#38bdf8" }}>
        {level}%
      </div>

      <div style={{ fontSize: "10px", color: isAlarm ? "#ef4444" : isLow ? "#f59e0b" : "#22c55e" }}>
        {isAlarm ? "KRİTİK SEVİYE" : isLow ? "Düşük" : "Normal"}
      </div>
    </div>
  );
};

export default MainTank;