import React from "react";

const LogPanel = ({ logs }) => {
  return (
    <div style={{
      background: "#0d1b2e",
      border: "0.5px solid #1a3050",
      borderRadius: "12px",
      padding: "14px"
    }}>
      <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#38bdf8", textTransform: "uppercase", marginBottom: "10px" }}>
        Sistem Logu
      </div>

      {logs.map((log, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: "8px",
          padding: "6px 0",
          borderBottom: i < logs.length - 1 ? "0.5px solid #0f2035" : "none",
          fontSize: "11px"
        }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: log.color, flexShrink: 0 }} />
          <span style={{ color: "#38bdf8", minWidth: "54px", fontFamily: "monospace" }}>{log.time}</span>
          <span style={{ color: "#94a3b8" }}>{log.msg}</span>
        </div>
      ))}
    </div>
  );
};

export default LogPanel;