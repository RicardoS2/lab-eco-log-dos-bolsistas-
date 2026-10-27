import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
config.configuration.baseUrl = "ricardos2.github.io/lab-eco-log-dos-bolsistas-"

export default config
export const layout = await loadQuartzLayout()