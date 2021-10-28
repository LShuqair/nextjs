import Head from 'next/head';
import { Link } from 'components';

import 'styles/globals.css';
import { Nav, Alert } from 'components';


export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next.js GuestBook</title>

                {/* bootstrap css */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>

            <div className="app-container bg-light">
                <Nav />
                <Alert />
                <div className="container pt-4 pb-4">
                    <Component {...pageProps} />
                </div>
                {/* <Link href="/users/add" className="btn btn-sm btn-success mb-2">Add User</Link> */}
            </div>

            {/* credits */}
            <div className="text-center mt-4">
                
            </div>
        </>
    );
}
