import { DetailAssetsCheckout } from "@/modules/analytic";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <><DetailAssetsCheckout id={params.id} /></>
    )
}