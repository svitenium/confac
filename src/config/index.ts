const appConfig = {
  db: {
    host: process.env.MONGO_HOST || 'localhost',
    db: process.env.MONGO_DB || 'confac-dev',
    other_dbs: 'confac-dev | confac-test | confac-acc | confac',
    port: process.env.MONGO_PORT || 32772,
  },
  server: {
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.PORT || 9000,
    basePath: process.env.SERVER_BASE_PATH || '',
  },
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || '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',
  ENVIRONMENT: process.env.NODE_ENV || 'development',
  ENABLE_ROOT_TEMPLATES: process.env.ENABLE_ROOT_TEMPLATES || false,
};

export default appConfig;
