import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { ParamsBase } from '@/models';
import paths from '../../content/paths.json';

const MainLinkStyles = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    && > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        font-size: 3rem;
        gap: 3rem;
        text-align: center;
    }
`;

const SingleLinkStyles = styled.div`
    a {
        text-decoration: none;
        color: black;
    }
`;

const Home: React.FC = () => (
    <div>
        <Head>
            <title>Notion API</title>
            <link rel="icon" href="favicon.ico" />
        </Head>

        <MainLinkStyles>
            <div>
                {paths.map(({ params }: ParamsBase) => (
                    <SingleLinkStyles key={params.id}>
                        <Link href={`/page/${params.id}`}>{params.title}</Link>
                    </SingleLinkStyles>
                ))}
            </div>
        </MainLinkStyles>
    </div>
);

export default Home;
