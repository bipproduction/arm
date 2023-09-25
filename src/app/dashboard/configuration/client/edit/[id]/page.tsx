import { EditClient, funGetOneClient } from "@/modules/configuration/client";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneClient({ id: params.id })
    return (
        <><EditClient data={data} /></>
    )
}