const withPWA = require('next-pwa')
const useServiceWorker = process.env.USE_SERVICE_WORKER > 0
const configs = {
  pwa: {
    dest: 'public',
  },
}

module.exports = useServiceWorker ? withPWA(configs) : configs
