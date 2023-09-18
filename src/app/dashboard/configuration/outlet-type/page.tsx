import { ListOutletType, funGetAllOutletType } from "@/modules/outlet";

export default async function Page() {
    const data = await funGetAllOutletType({ page: 1 })
    return (
        <><ListOutletType data={data} /></>
    )
}