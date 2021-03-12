export default () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV && NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('/assets/service-worker.js')
        .then(function (registration) {
          console.log('👩🏻‍🔧 Workers 👨🏽‍🔧 registered: ', registration.scope);
        })
        .catch(function (err) {
          console.log('👩🏻‍🔧 Workers 👨🏽‍🔧 registration failed: ', err);
        });
    });
  }

  return true;
};
