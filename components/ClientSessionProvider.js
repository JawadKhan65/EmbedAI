// components/ClientSessionProvider.js
'use client'; // This directive ensures the component runs on the client side

import { SessionProvider } from "next-auth/react";

export default function ClientSessionProvider({ session, children }) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}
