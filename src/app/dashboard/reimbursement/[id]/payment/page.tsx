import { PaymentReimbursement } from "@/modules/reimbursement";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
            <PaymentReimbursement />
        </>
    )
}