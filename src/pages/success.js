import {CheckCircleIcon} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import {signIn,signOut,session, useSession} from "next-auth/client";
function success() {
    
    const router=useRouter();
    
    return (
        <div className="bg-gray-100 h-screen ">
            <main className="max-w-screen-lg mx-auto">
                <div className="flex  flex-col p-10 bg-white ">

                <div className="flex items-center space-y-2 mb-5 ">
                    <CheckCircleIcon className="text-green-500 h-10"/>
                    <h1 className="text-3xl ">Thank you , your order has been confirmed</h1>

                </div>
                <p>
                    Thank you for shopping with us. we'll send a confirmed once your item has shipped, if you like to check the status of your order(s)
                    please press the link below.
                </p>
                <button onClick={()=>router.push('/orders')} className="button mt-8">Go to My orders</button>
                </div>
            </main>
        </div>
    )
}

export default success
