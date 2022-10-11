import { AccessDeniedError, UnexpectedError } from "../../domain/errors";
import { IHttpClient, HttpStatusCode } from "../../domain/http/http.client";
import { StoreEntity } from "../../domain/store/store.entity";
import { LoadStoreList } from "../../domain/use-cases";

export class RemoteLoadStoreList implements LoadStoreList {
  private static instance: LoadStoreList | undefined;
  constructor(
    private readonly url: string,
    private readonly httpClient: IHttpClient<RemoteLoadStoreList.Model[]>
  ) {}

  static getInstance(
    url: string,
    httpClient: IHttpClient<RemoteLoadStoreList.Model[]>
  ) {
    if (this.instance) return this.instance;
    this.instance = new RemoteLoadStoreList(url, httpClient);
    return this.instance;
  }

  async loadAll(): Promise<LoadStoreList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
      headers: {},
    });

    const remoteStores = httpResponse.body || [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteStores;
      case HttpStatusCode.noContent:
        return [];
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteLoadStoreList {
  export type Model = StoreEntity;
}
