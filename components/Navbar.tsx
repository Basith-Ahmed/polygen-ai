import { UserButton } from "@clerk/nextjs";
import HamburgerMenu from "./HamburgerMenu";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export default async function Navbar() {

const apiLimitCount = await getApiLimitCount()
const isPro = await checkSubscription()

    return (
        <div className="flex items-center p-4">
            <HamburgerMenu apiLimitCount={apiLimitCount} isPro={isPro}/>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
}