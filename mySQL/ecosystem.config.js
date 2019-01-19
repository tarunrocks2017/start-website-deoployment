module.exports = {
  apps: [{
    name: 'mySQL',
    script: './mySQL/index.js',

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
      IP: '18.220.102.66',
    },
  }],

  deploy: {
    production: {
      key: '/home/tarun/Downloads/admin.pem',
      user: 'ubuntu',
      host: '18.220.102.66',
      ref: 'origin/master',
      repo: 'git@gitlab.com:mountblue/dec-2018-js-backend/09-tarunharsh-deployment-project.git',
      path: '/home/ubuntu/',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production && npm start',
    },
  },
};
