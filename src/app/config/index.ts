import 'dotenv/config';

const env = (key: string, defaultValue: string): string => {
  return process.env[key] || defaultValue;
};

export default {
  APP_NAME: env('APP_NAME', 'App'),
  PORT: env('PORT', '3000'),
  LOCALE: env('LOCALE', 'es-CL'),
  TIME_ZONE: env('TIME_ZONE', 'America/Santiago'),
  TRANSBANK: {
    WEBPAY: {
      COMMERCE_CODE: env('TRANSBANK_WEBPAY_COMMERCE_CODE', '597055555532'),
      API_KEY: env('TRANSBANK_WEBPAY_API_KEY', ''),
      ENVIRONMENT: env('TRANSBANK_WEBPAY_ENVIRONMENT', 'https://webpay3gint.transbank.cl'),
      CALLBACK_URL: env('TRANSBANK_WEBPAY_CALLBACK_URL', 'http://localhost:3000/webpay/commit'),
    },
  },
};
