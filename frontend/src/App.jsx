import React, { useState, useEffect } from "react";
import useWebSocket from "./hooks/useWebSocket";
import MainTank from "./components/MainTank";
import ValveCard from "./components/ValveCard";
import LogPanel from "./components/LogPanel";

const App = () => {
  const { sensorData, sendValveCommand } = useWebSocket();
  const [valves, setValves] = useState({ pool: true, garden: true, house: true });
  const [logs, setLogs] = useState([
    { color: "#38bdf8", time: "--:--:--", msg: "Sistem başlatıldı" },
  ]);

  useEffect(() => {
    if (!sensorData) return;
    setValves({
      pool: sensorData.poolValveOpen,
      garden: sensorData.gardenValveOpen,
      house: sensorData.houseValveOpen,
    });
  }, [sensorData]);

  const handleToggle = (type, state) => {
    sendValveCommand(type, state);
    const names = { pool: "Havuz", garden: "Çim sulama", house: "Ev hattı" };
    const now = new Date().toTimeString().slice(0, 8);
    setLogs((prev) => [
      { color: state ? "#22c55e" : "#ef4444", time: now, msg: `${names[type]} vanası ${state ? "açıldı" : "kapatıldı"}` },
      ...prev.slice(0, 5),
    ]);
  };

  return (
    <div style={{ background: "#070d1a", minHeight: "100vh", padding: "20px", fontFamily: "'Courier New', monospace", color: "#e2e8f0" }}>
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", paddingBottom: "14px", borderBottom: "0.5px solid #1a3050" }}>
        <div style={{ color: "#38bdf8", letterSpacing: "3px", fontSize: "12px", textTransform: "uppercase" }}>
          AquaControl — Su Yönetim Sistemi
        </div>
        <div style={{ fontSize: "11px", color: "#64748b" }}>
          <span style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", background: sensorData ? "#22c55e" : "#ef4444", marginRight: "6px" }} />
          {sensorData ? "CANLI" : "BAĞLANIYOR..."}
        </div>
      </div>

      {/* Ana Depo + Durum */}
      <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "16px", marginBottom: "16px" }}>
        <MainTank level={sensorData ? Math.round(sensorData.mainTankLevel) : 0} />

        <div style={{ background: "#0d1b2e", border: "0.5px solid #1a3050", borderRadius: "12px", padding: "18px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#38bdf8", textTransform: "uppercase", marginBottom: "14px" }}>Anlık Durum</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {[
              { label: "Havuz Akışı", val: sensorData ? sensorData.poolFlow + " L/dk" : "--", color: "#06b6d4" },
              { label: "Çim Akışı", val: sensorData ? sensorData.gardenFlow + " L/dk" : "--", color: "#22c55e" },
              { label: "Ev Akışı", val: sensorData ? sensorData.houseFlow + " L/dk" : "--", color: "#a78bfa" },
              { label: "Toplam", val: sensorData ? (sensorData.poolFlow + sensorData.gardenFlow + sensorData.houseFlow).toFixed(1) + " L/dk" : "--", color: "#38bdf8" },
            ].map((s, i) => (
              <div key={i} style={{ background: "#060d18", borderRadius: "8px", padding: "12px" }}>
                <div style={{ fontSize: "20px", fontWeight: "700", color: s.color }}>{s.val}</div>
                <div style={{ fontSize: "10px", color: "#64748b", letterSpacing: "1px", textTransform: "uppercase", marginTop: "2px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vana Kartları */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginBottom: "16px" }}>
        {["pool", "garden", "house"].map((type) => (
          <ValveCard
            key={type}
            type={type}
            flow={sensorData ? sensorData[type + "Flow"] : 0}
            valveOpen={valves[type]}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {/* Log */}
      <LogPanel logs={logs} />
    </div>
  );
};

export default App;