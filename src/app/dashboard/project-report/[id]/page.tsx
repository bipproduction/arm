import { DetailProjectReport } from "@/modules/reports";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <><DetailProjectReport id={params.id} /></>
    )
}