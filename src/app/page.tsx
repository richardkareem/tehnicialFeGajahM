import {fethAll} from "@/utils/fetchApi";
import {PaginationResponse} from "@/types/global.type";
import {ContentProducts} from "@/components/contentProducts";


export default async function Home() {

  return (
    <div>
         <ContentProducts />

    </div>
  );
}
