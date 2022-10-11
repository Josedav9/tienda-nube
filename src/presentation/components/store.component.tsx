import { StoreEntity } from "../../domain/store/store.entity";

export default function Store({ store }: { store: StoreEntity }) {
  //TODO: update the fake data.
  return (
    <>
      <tr>
        <td>{store.id}</td>
        <td>{store.uid}</td>
        <td>{store.social_insurance_number}</td>
      </tr>
    </>
  );
}
