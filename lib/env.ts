import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  PEXELS_API_KEY: str(),
  AZURE_URL: str()
})

export default env;