import { DetailArchive } from "@/modules/archive";

export default function page ({params}: {params: {id: string}}) {
  return <DetailArchive id={params.id}/>
}