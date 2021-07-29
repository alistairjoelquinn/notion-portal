import { ParamsBase } from '@/models';
import Head from 'next/head';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

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

export interface Props {
    results: Result[];
    query: {
        id: string;
    };
}

export interface Result {
    type: string;
    text: ResultText;
    annotations: ResultAnnotations;
    plain_text: string;
    href: null;
    heading_3?: Text;
    paragraph?: Text;
    bulleted_list_item?: Text;
}

export interface ResultAnnotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
}

export interface ResultText {
    content: string;
    link: null;
}

export interface Text {
    type: string;
    text: TextText;
    annotations: TextAnnotations;
    plain_text: string;
    href: null;
}

export interface TextAnnotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
}

export interface TextText {
    content: string;
    link: null;
}

export interface Paths {
    params: PathParams;
}

export interface PathParams {
    id: string;
    title: string;
}

const SinglePage: React.FC<Props> = ({ results, query }) => {
    let notionNotes: Text[][] = [];
    if (results) {
        notionNotes = results.map((result: Result) => {
            const { type } = result;
            console.log('type: ', type);
            return result[type].text;
        });
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
