import { useEffect, useState } from "react";

function useNodeStats() {
  const [stats, setStats] = useState({
    status: "ONLINE",
    cpu: 24,
    memory: 38,
    containers: 6,
    uptime: "04d 17h",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((current) => ({
        ...current,

        cpu: Math.floor(Math.random() * 20) + 15,

        memory: Math.floor(Math.random() * 12) + 32,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return stats;
}

export default useNodeStats;