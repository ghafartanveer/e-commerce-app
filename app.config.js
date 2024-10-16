import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      BASE_URL: process.env.BASE_URL || "https://swapi.dev/api"
    },
  };
};
