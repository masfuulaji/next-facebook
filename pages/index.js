import { useSession } from "next-auth/react"

import Head from "next/head";
import Header from "@/components/partials/Header/Header";
import Login from "@/components/Auth/Login";

export default function Home() {
    const { data: session, status } = useSession()
    if(status === 'loading') return <h1>Loading</h1>
    if (status === 'unauthenticated') return <Login />;
    return (
        <>
            <Head>
                <title>Facebook</title>
            </Head>
            {/* Header */}
            <Header />

            <main>
                {/* Sidebar */}
                {/* Feed */}
                {/* Widget */}
            </main>
        </>
    );
}

// export async function getServerSideProps(context) {
//     const session = await getSession(context);
//     return {
//         props: {
//             session,
//         },
//     };
// }
