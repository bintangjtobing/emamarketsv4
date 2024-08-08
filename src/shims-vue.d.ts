import { DefineComponent } from '@vue/runtime-core';
import { I18n } from 'vue-i18n';

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: I18n['global']['t'];
  }
}

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.json' {
  const value: any;
  export default value;
}
