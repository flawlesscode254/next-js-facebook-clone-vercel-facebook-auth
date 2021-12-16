import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
FACEBOOK_CLIENT_ID=2084147611734784
clientSecret: "",
    }),
    // ...add more providers here
  ],
})