import { DetailOutlet } from "@/modules/outlet";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <><DetailOutlet id={params.id} /></>
    )
}