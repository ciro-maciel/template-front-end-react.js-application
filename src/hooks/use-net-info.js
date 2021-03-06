import { useState, useLayoutEffect } from 'react';
// import utility from '@ciro-maciel/utility';

export default () => {
  const [netInfo, setNetInfo] = useState();

  useLayoutEffect(() => {
    setTimeout(() => {
      // const netData = utility.net.info.data;
      const netData = { ip: '', region: '', country_code_iso3: '' };

      // console.log('aaa', utility.net.info.data);
      // todo - colocar interval

      setNetInfo({
        ip: netData.ip,
        location: `${netData.region}, ${netData.country_code_iso3}`,
        agent: window.navigator.userAgent,
      });
      //
    }, 500);
  }, []);

  return netInfo;
};
