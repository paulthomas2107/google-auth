import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: '545676556601-9uk2gjkohlmhk8200hvjg9qpt9krkktt.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
});
