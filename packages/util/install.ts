import type { App, Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    //注册组件
    //(comp as any).name
    console.log((comp as any).name);
    app.component((comp as any).name, comp);
  };
  return comp as SFCWithInstall<T>;
};
