import { auth } from "@/lib/auth";
import Image from "next/image";
import { signIn } from "@/lib/auth"

export default async function Home() {
  // const session = await auth()
  //if (!session) return <div>Not authenticated</div>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </main>
  );
}
