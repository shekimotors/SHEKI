import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import Head from 'next/head.js';


export default function Template(props) {
    return (
        <>
            <Head>
                <title>SHEKI Motors</title>
                <meta name="google-site-verification" content="VKx8Q3h12OaI9S7Hihwt_Mfgn9da_SovSZZP1DjghwI" />
            </Head>

            <Navbar lang={props.lang} />
            <div 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <main
                    style={{
                        maxWidth: '1524px',
                        minHeight: '100vh',
                        width: '100%',

                        padding: 0,
                        margin: 0,
                    }}
                >
                    {props.children}
                </main>
            </div>
            <Footer />
        </>
    );
}