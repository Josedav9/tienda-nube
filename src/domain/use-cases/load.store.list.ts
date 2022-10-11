import { StoreEntity } from "../store/store.entity";

export interface LoadStoreList {
  loadAll: () => Promise<LoadStoreList.Model[]>;
}

export namespace LoadStoreList {
  export type Model = StoreEntity;
}
