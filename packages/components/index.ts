import type { App, Plugin } from 'vue';
import Icon from './icon';

const components = [Icon];

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
  };
  return { install };
};

export default makeInstaller(components);
