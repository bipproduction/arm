import { ListOutletType, funGetAllOutletType } from "@/modules/outlet";

export default async function Page() {
    const data = await funGetAllOutletType({ p: 1 })
    return (
        <><ListOutletType data={data} /></>
    )
}