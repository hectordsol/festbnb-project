import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ], 
    session: {
        maxAge: 30, // Duración de la sesión: 30 segundos
    },
    cookies: {
      sessionToken: {
        name: `next-auth.session-token`,
        options: {
          maxAge: 30, // Duración de la sesión: 30 segundos
        },
      },
    }
});