import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  AZURE_URL: str()
})

export default env;