import { ListOutletType } from "@/modules/outlet";
import { funGetAllOutletType } from "@/modules/outlet/fun/get_all_outlet_type";

export default async function Page() {
    const data = await funGetAllOutletType()
    return (
        <><ListOutletType data={data} /></>
    )
}