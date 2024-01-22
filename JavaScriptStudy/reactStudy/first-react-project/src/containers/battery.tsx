import { useState, useEffect } from "react";

const useBatteryStatus = () => {
  type BatteryStatus = {
    charging: boolean;
    level: number;
  };

  const [batteryStatus, setBatteryStatus] = useState<BatteryStatus | null>(
    null
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkBatteryStatus = () => {
    navigator.getBattery().then((status: BatteryStatus) => {
      setBatteryStatus((prevStatus) => {
        return {
          ...prevStatus,
          charging: status?.charging,
          level: status?.level,
        };
      });
    });
  };

  useEffect(() => {
    const intervalId = window.setInterval(checkBatteryStatus, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [batteryStatus?.charging, checkBatteryStatus]);

  return batteryStatus;
};

export default function Battery() {
  const batteryStatus = useBatteryStatus();

  const batteryPercentage = batteryStatus
    ? Math.round(batteryStatus.level * 100)
    : 0;

  return (
    <div>
      {batteryStatus?.charging ? (
        <p className="battery-charging">
          Battery charging 🔋 (%{batteryPercentage})
        </p>
      ) : (
        <p>Battery not charging 🪫 (%{batteryPercentage})</p>
      )}
    </div>
  );
}
