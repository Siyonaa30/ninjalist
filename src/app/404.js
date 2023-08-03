import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1) tiro minus waa gadal u lapo mid + eh na waa hore aad(arows ka wada oo refresh page agtiis)
            router.push('/')  //home page gee
        },3000)
    },[]);
    return ( 
        <div className="notfound">
            <h1>Oops...</h1>
            <h2>That page can not be found</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;
