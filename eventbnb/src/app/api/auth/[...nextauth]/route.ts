
import NextAuth from "next-auth";
import { OAuthConfig } from "next-auth/providers";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

const authOptions: {
  providers: OAuthConfig<GoogleProfile>[];
} = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID as string,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    // })
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };