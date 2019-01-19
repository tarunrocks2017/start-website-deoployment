module.exports = {
  apps: [{
    name: 'mysqlAPI',
    script: '08-tarunharsh-microservice-project/LibraryApp/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
      IP: '18.222.132.13',
    },
  }],

  deploy: {
    production: {
      key: '/home/tarun/Downloads/adminAPI.pem',
      user: 'ubuntu',
      host: '18.222.132.13',
      ref: 'origin/master',
      repo: 'git@gitlab.com:mountblue/dec-2018-js-backend/08-tarunharsh-microservice-project.git',
      path: '/home/ubuntu/08-tarunharsh-microservice-project',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
