import { ListOutletType, funGetAllOutletType } from "@/modules/outlet";

export default async function Page() {
    const data = await funGetAllOutletType(1)
    return (
        <><ListOutletType data={data} /></>
    )
}