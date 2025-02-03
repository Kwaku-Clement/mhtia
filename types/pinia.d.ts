declare module 'pinia-plugin-persist' {
  import { DefineStoreOptionsBase } from 'pinia';

  interface PersistStrategy {
    key?: string;
    storage?: Storage;
  }

  interface PersistOptions {
    enabled?: boolean;
    strategies?: PersistStrategy[];
  }

  interface DefineStoreOptionsBase<S, Store> {
    persist?: PersistOptions;
  }
}
