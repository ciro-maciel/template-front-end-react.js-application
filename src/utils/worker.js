export default () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV && NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('/assets/service-worker.js')
        .then(function (registration) {
          console.log(`👩🏻‍🔧 we're working 👨🏽‍🔧 in: `, registration.scope);
        })
        .catch(function (err) {
          console.log(`there was a problem, 👩🏻‍🔧 let's check 👨🏽‍🔧`, err);
        });
    });
  }

  return true;
};
