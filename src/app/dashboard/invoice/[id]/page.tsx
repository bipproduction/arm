import { DetailInvoice } from "@/modules/invoice";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
            <DetailInvoice id={params.id}/>
        </>
    )
}