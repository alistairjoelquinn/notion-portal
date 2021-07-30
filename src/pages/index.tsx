import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { ParamsBase, Props, Result } from '@/models';
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

async function getBlocksRecursively(id: string) {
    console.log('id: ', id);
    const res = await fetch(`https://api.notion.com/v1/blocks/${id}/children`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
            'Notion-Version': '2021-05-13',
        },
    });

    const { results }: { results: Result[] } = await res.json();
    console.log('results: ', results);

    if (results) {
        return results.map((result) => {
            if (result.has_children) {
                return getBlocksRecursively(result.id);
            }
            return result;
        });
    }
    return 'no result';
}

export async function getServerSideProps() {
    const startingId = process.env.NEXT_PUBLIC_HOMEPAGE_ID;

    if (startingId) {
        const res = await getBlocksRecursively(startingId);
        console.log('RES: ', res);
    }

    return {
        props: {},
    };
}

const Home: React.FC<Props> = ({ results }) => (
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
