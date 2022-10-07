
import DefaultTheme from 'vitepress/theme'
import saui from 'sa-ui'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(saui)
    }
}