import { auth } from "@/lib/auth";
import { signIn, signOut } from "@/lib/auth"

export default async function Header(){
    const session = await auth()

    return (
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b px-6 bg-gray-100/40 justify-between lg:justify-end">
            <a className="flex items-center gap-2 font-semibold lg:hidden" href="/">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-gray-100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" rx="16" fill="currentColor"></rect>
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="black"></path>
                </svg>
                <span className="">ACME</span>
            </a>
            {
                session?.user ? (
                    <>
                        <p>{session.user.name}</p>
                        <form
                            action={async () => {
                                "use server"
                                await signOut()
                            }}
                            >
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Sign Out</button>
                        </form>
                    </>
                ) : (
                    <form
                        action={async () => {
                            "use server"
                            await signIn()
                        }}
                        >
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Sign In</button>
                    </form>
                )
            }
        </header>
    );
}