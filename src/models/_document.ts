import { NextPageContext } from 'next';

export interface GetPropsContext extends NextPageContext {
    renderPage: (App: any) => any;
}
