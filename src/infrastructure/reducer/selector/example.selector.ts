import { IExample } from "../slices/example.slice";

export const exampleData = (state: { example: IExample }) => state.example.data;
