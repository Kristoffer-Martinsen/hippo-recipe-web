import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  RECIPE_API: str()
})

export default env;