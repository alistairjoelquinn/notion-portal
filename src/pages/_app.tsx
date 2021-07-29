import { NextPage } from 'next';
import { Normalize } from 'styled-normalize';

import { AppProps, GetPropsContext, PagePropsBase } from '@/models/_app';
import GlobalStyles from '@/components/styles/GlobalStyles';
import Typography from '@/components/styles/Typography';
import Page from '@/components/Page';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
    <>
        <Normalize />
        <GlobalStyles />
        <Typography />
        <Page>
            <Component {...pageProps} />
        </Page>
    </>
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
