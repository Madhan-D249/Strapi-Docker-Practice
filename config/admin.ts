export default ({ env }) => {
  console.log('🔍 Checking ENV variables in admin.ts:', {
    API_TOKEN_SALT: env('API_TOKEN_SALT'),
    ADMIN_JWT_SECRET: env('ADMIN_JWT_SECRET'),
    TRANSFER_TOKEN_SALT: env('TRANSFER_TOKEN_SALT'),
    ENCRYPTION_KEY: env('ENCRYPTION_KEY'),
  });

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  };
};
