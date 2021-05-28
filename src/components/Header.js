import Image from "next/image"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"
import {signIn,signOut,session, useSession} from "next-auth/client";
import {useRouter} from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";


function Header() {
    const [session]=useSession();
    const router=useRouter();
    const items=useSelector(selectItems);
    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
               <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    {/**top nav */}
                <Image
                onClick={()=>router.push('/')}
                className="cursor-pointer"
                src="/img/amazon_PNG11.png"
                width={150}
                height={40}
                objectFit="contain"
                />
                </div>   
                {/**search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow  bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 placeholder-black" type="text" name="" id="" placeholder="Currently in progress mode" disabled/>  
                <SearchIcon className="h-12 p-4"/>   
                </div>  
                {/**right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn :signOut} className="link"><p>
                        {session? `Hello , ${session.user.name}` :"SignIn"}
                    </p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    {/** ()=> session && router.push('/orders')*/}
                    <div onClick={()=>  router.push('/orders')} className="link"><p>Returns</p>
                    <p className="font-extrabold md:text-sm">&Orders</p>
                    </div>
                    <div onClick={()=>router.push('/checkout')}  className="link relative flex items-center ">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400  text-center rounded-full text-black font-bold">
                            {items.length}</span>
                        <ShoppingCartIcon className="h-10"/>
                                <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                    </div>         
            </div>
            {/**bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center ">
                    <MenuIcon className="h-6 mr-1"/>
                    All</p>
                    <a href="https://www.primevideo.com" target="_blank" rel="noopener noreferrer">
                
                <p className="link">Prime Video</p></a>
                <a href="https://business.amazon.com"  target="_blank" rel="noopener noreferrer" >
                <p className="link">Amazon Business</p></a>
                <a href="https://www.amazon.in/gp/help/customer/" target="_blank" rel="noopener noreferrer">
                <p className="link">Customer Service</p></a>
                <a href="https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping" target="_blank" rel="noopener noreferrer">
                <p className="link hidden lg:inline-flex">Download App</p>
                </a>
               
            </div>
        </header>
    )
}

export default Header
