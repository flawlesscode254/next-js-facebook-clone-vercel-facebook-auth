import NextAuth from "next-auth"
import FacebookPro from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})