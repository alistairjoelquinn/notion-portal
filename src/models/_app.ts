import { NextPageContext } from 'next';

export type PagePropsBase = {
    query?: any;
};

export interface AppProps {
    Component?: any;
    pageProps: any;
}

export interface GetPropsContext extends NextPageContext {
    Component: any;
    ctx: any;
}
