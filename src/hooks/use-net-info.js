import { useState, useLayoutEffect } from 'react';
import { network } from '@ciro-maciel/utility';

export default () => {
  const [netInfo, setNetInfo] = useState();

  useLayoutEffect(() => {
    setTimeout(() => {
      const netData = network.info.data;

      setNetInfo({
        ip: netData.ip,
        location: `${netData.region}, ${netData.country_code_iso3}`,
        agent: window.navigator.userAgent,
      });
    }, 500);
  }, []);

  return netInfo;
};
