import { DetailLogisticReport } from "@/modules/reports";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
            <DetailLogisticReport id={params.id} />
        </>
    )
}