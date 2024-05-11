import Link from "next/link";

export default function Menu(){
    return (
        <div className="hidden border-r bg-gray-100/40 lg:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-5">
                    <Link className="flex items-center gap-2 font-semibold" href="/">
                        <span className="">Dashboard</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <a className="flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900  dark:text-gray-50 dark:hover:text-gray-50 bg-gray-100 dark:bg-gray-800" href="/">Users</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}