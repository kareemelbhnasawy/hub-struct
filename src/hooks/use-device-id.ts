import { useState, useEffect } from 'react';
import getDeviceUniqueID from '@/utilities/get-device-info';

export const useDeviceId = () => {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDeviceId = async () => {
      try {
        const id = await getDeviceUniqueID();
        setDeviceId(id);
      } catch (error) {
        console.error('Failed to get device ID:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeviceId();
  }, []);

  return { deviceId, isLoading };
};
