import React from "react";

const colors = {
  pool:   { main: "#06b6d4", label: "Havuz Hattı",  icon: "🏊" },
  garden: { main: "#22c55e", label: "Çim Sulama",   icon: "🌿" },
  house:  { main: "#a78bfa", label: "Ev Hattı",     icon: "🏠" },
};

const ValveCard = ({ type, flow, valveOpen, onToggle }) => {
  const color = colors[type];

  return (
    <div style={{
      background: "#0d1b2e",
      border: "0.5px solid #1a3050",
      borderRadius: "12px",
      padding: "14px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <div style={{ fontSize: "10px", color: "#94a3b8", letterSpacing: "1px", textTransform: "uppercase" }}>
          {color.label}
        </div>
        <span style={{ fontSize: "20px" }}>{color.icon}</span>
      </div>

      <div style={{ fontSize: "22px", fontWeight: "700", color: color.main }}>
        {flow} <span style={{ fontSize: "12px" }}>L/dk</span>
      </div>

      <div style={{ fontSize: "10px", color: "#64748b", marginTop: "2px" }}>
        {valveOpen ? "Akış aktif" : "Vana kapalı"}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px", paddingTop: "10px", borderTop: "0.5px solid #1a3050" }}>
        <span style={{ fontSize: "10px", color: "#64748b", letterSpacing: "1px", textTransform: "uppercase" }}>Vana</span>
        <div
          onClick={() => onToggle(type, !valveOpen)}
          style={{
            width: "38px", height: "21px",
            background: valveOpen ? color.main : "#1a3050",
            borderRadius: "21px",
            cursor: "pointer",
            position: "relative",
            transition: "background 0.3s"
          }}
        >
          <div style={{
            position: "absolute",
            width: "15px", height: "15px",
            background: "white",
            borderRadius: "50%",
            top: "3px",
            left: valveOpen ? "20px" : "3px",
            transition: "left 0.3s"
          }} />
        </div>
      </div>
    </div>
  );
};

export default ValveCard;