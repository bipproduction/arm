import { EditOutletType, funGetOneOutletType } from "@/modules/outlet";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneOutletType({ id: params.id });
    if (!data) return <>kosong</>
    return (
        <>
            <EditOutletType data={data} />
        </>
    )
}