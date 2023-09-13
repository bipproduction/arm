import { DetailBilling } from "@/modules/billing";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
            <DetailBilling id={params.id} />
        </>
    )
}