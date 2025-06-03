import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  RECIPE_API_LOCAL: str(),
})

export default env;