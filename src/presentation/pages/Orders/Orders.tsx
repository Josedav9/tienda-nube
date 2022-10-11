import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RemoteLoadStoreList } from "../../../data/use-cases/remote.load.store.list";
import { IHttpClient } from "../../../domain/http/http.client";
import { StoreEntity } from "../../../domain/store/store.entity";
import HttpClient from "../../../infrastructure/http";
import { addStore } from "../../../infrastructure/reducer/slices/stores.slice";
import Store from "../../components/store.component";
import "./style.scss";

export default function Orders() {
  const [stores, setStores] = useState<Array<object>>([]);
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const httpClient: IHttpClient<StoreEntity> = HttpClient;

  //TODO: change the endpoint
  const loadUseCase = RemoteLoadStoreList.getInstance(
    "https://random-data-api.com/api/users/random_user?size=10", //https://api.tiendanube.com/v1/orders
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
      <div className="four">
        <h1>
          <span>Tienda Nube</span> Orders: <em>{stores.length}</em> stores
        </h1>
      </div>
      <button onClick={toggleClass}>3D Mode</button>
      <table className={isActive ? "threeDMode" : " "}>
        <thead>
          <tr>
            <td>ID</td>
            <td>UUID</td>
            <td>CODE</td>
          </tr>
        </thead>
        <tbody>
          {stores.map((store, index) => (
            <Store store={store} key={index}></Store>
          ))}
        </tbody>
      </table>
    </div>
  );
}
