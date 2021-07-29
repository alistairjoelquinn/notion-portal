import { AppProps } from 'next/app';
import Page from '../components/Page';

const App = ({ Component, pageProps }: AppProps) => (
    <Page>
        <Component {...pageProps} />
    </Page>
);

interface PagePropsReceived {
    query: any;
}

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps: PagePropsReceived = { query: undefined };
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
};

export default App;
