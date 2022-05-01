const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');
module.exports = phase => {
  if (phase === 'PHASE_DEVELOPMENT_SERVER') {
    return {
      env: {
        mongo_user: 'Thesingh',
        mongo_password: 'qwertyuiop',
        mongo_cluster: 'cluster0',
        mongo_db: 'events-dev',
      },
    };
  }
  return {
    env: {
      mongo_user: 'Thesingh',
      mongo_password: 'qwertyuiop',
      mongo_cluster: 'cluster0',
      mongo_db: 'events',
    },
  };
};
