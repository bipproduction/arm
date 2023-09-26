import { LoginView } from "@/modules/login";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const c = cookies().get("_tkn")
  if (c || !_.isUndefined(c)) return redirect('/dashboard')
  return (<>
    <LoginView />
  </>);
}
