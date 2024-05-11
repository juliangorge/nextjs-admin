import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    providers: [
        Google({
            // profile(profile) : any {
            //     return { role: profile.role ?? "user"}
            // },
        })
    ],    
    callbacks: {
        async signIn({ profile }) {
            const user = await prisma.user.findUnique({
                where: { email: profile?.email }
            });

            return user != null;
        }
    }
});