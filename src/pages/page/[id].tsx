import { ParamsBase } from '@/models';
import Head from 'next/head';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

import { Paths, Props, Result, Text, TextElement } from '@/models/page/[id]';
import paths from '../../../content/paths.json';

const pathData: Paths[] = paths;

export async function getServerSideProps({ params }: ParamsBase) {
    const res = await fetch(`https://api.notion.com/v1/blocks/${params.id}/children`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
            'Notion-Version': '2021-05-13',
        },
    });
    const { results } = await res.json();
    return {
        props: {
            results,
            query: { id: params.id },
        },
    };
}

const SinglePageStyles = styled.main`
    padding-top: 10rem;
`;

const SinglePage: React.FC<Props> = ({ results, query }) => {
    let notionNotes: (TextElement[] | undefined)[] = [];
    if (results) {
        notionNotes = results.map((result: Result) => {
            const { type } = result;
            console.log('result: ', result);
            return result[type]?.text;
        });
        // console.log('notionNotes: ', notionNotes);
    }

    if (!notionNotes) return null;
    if (!results) return null;

    return (
        <div>
            <Head>
                <title>{pathData.find((path) => path.params.id === query.id)?.params.title}</title>
            </Head>

            <SinglePageStyles>
                {notionNotes.map((note) => (
                    <div key={uuid()}>
                        {note && note.map((item) => <span key={uuid()}>{item.plain_text}</span>)}
                        <br />
                    </div>
                ))}
            </SinglePageStyles>
        </div>
    );
};

export default SinglePage;
