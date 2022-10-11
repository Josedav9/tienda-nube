import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RemoteLoadStoreList } from "../../../data/use-cases/remote.load.store.list";
import { IHttpClient } from "../../../domain/http/http.client";
import { StoreEntity } from "../../../domain/store/store.entity";
import HttpClient from "../../../infrastructure/http";
import { addStore } from "../../../infrastructure/reducer/slices/stores.slice";

export default function Store() {
  const [stores, setStores] = useState<Array<object>>([]);

  const httpClient: IHttpClient<StoreEntity> = HttpClient;

  const loadUseCase = RemoteLoadStoreList.getInstance(
    "https://random-data-api.com/api/users/random_user?size=10",
    httpClient
  );

  const disptach = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await loadUseCase.loadAll();
      disptach(addStore(data));

      setStores(data);
    })().catch((e) => {
      console.log(e);
    });
  }, [httpClient, loadUseCase, disptach]);

  return (
    <div>
      <h2>Hello world from Store</h2>
      {stores.map((store) => (
        <div className="store-secundary-div">{JSON.stringify(store)}</div>
      ))}
    </div>
  );
}
