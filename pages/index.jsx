import { useSession } from "next-auth/react"

import Head from "next/head";
import Header from "@/components/partials/Header/Header";
import Login from "@/components/Auth/Login";
import Sidebar from "@/components/partials/Sidebar/Sidebar";

export default function Home() {
    const { data: session, status } = useSession()
    if(status === 'loading') return <h1>Loading</h1>
    if (status === 'unauthenticated') return <Login />;
    return (
        <div className="h-screen bg-gray-100 overflow-hidden">
            <Head>
                <title>Facebook</title>
            </Head>
            {/* Header */}
            <Header />

            <main className="flex">
                {/* Sidebar */}
                <Sidebar />
                {/* Feed */}
                {/* Widget */}
            </main>
        </div>
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
