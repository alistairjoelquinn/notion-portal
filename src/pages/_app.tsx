import { NextPage } from 'next';

import { AppProps, GetPropsContext, PagePropsBase } from '@/models/_app';
import Page from '../components/Page';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
    <Page>
        <Component {...pageProps} />
    </Page>
);

App.getInitialProps = async (props: GetPropsContext) => {
    let pageProps: PagePropsBase = {};
    if (props.Component.getInitialProps) {
        pageProps = await props.Component.getInitialProps(props.ctx);
    }
    pageProps.query = props.ctx.query;
    return { pageProps };
};

export default App;
