import { NextPageContext } from 'next';

type CallbackProps = (props: any) => any;

type CallbackApp = (App: any) => CallbackProps;

export interface GetPropsContext extends NextPageContext {
    renderPage: (callback: CallbackApp) => any;
}
