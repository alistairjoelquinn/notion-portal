import { NextPage } from 'next';

import { AppProps, PagePropsBase } from '@/models/App';
import Page from '../components/Page';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
    <Page>
        <Component {...pageProps} />
    </Page>
);

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps: PagePropsBase = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
};

export default App;
