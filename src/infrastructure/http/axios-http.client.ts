import {
  IHttpClient,
  HttpRequest,
  HttpResponse,
} from "../../domain/http/http.client";
import axios, { AxiosResponse } from "axios";

export class AxiosHttpClient implements IHttpClient<AxiosResponse> {
  async request(data: HttpRequest): Promise<HttpResponse<AxiosResponse>> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
