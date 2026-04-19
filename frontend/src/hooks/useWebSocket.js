import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const useWebSocket = () => {
  const [sensorData, setSensorData] = useState(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    const stompClient = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      onConnect: () => {
        console.log("WebSocket bağlandı!");

        stompClient.subscribe("/topic/sensor", (message) => {
          const data = JSON.parse(message.body);
          setSensorData(data);
        });
      },
      onDisconnect: () => {
        console.log("WebSocket bağlantısı kesildi!");
      },
    });

    stompClient.activate();
    setClient(stompClient);

    return () => stompClient.deactivate();
  }, []);

  const sendValveCommand = (valve, state) => {
    if (client && client.connected) {
      client.publish({
        destination: "/app/valve",
        body: `${valve}:${state}`,
      });
    }
  };

  return { sensorData, sendValveCommand };
};

export default useWebSocket;