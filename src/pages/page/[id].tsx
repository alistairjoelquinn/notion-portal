import { ParamsBase } from '@/models';
import Head from 'next/head';

import styled from 'styled-components';
// import paths from '../../../content/paths.json';

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
        },
    };
}

const SinglePageStyles = styled.main`
    padding-top: 10rem;
`;

export interface Props {
    results: Result[];
    query?: any;
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

const SinglePage: React.FC<Props> = ({ results }) => {
    console.log('results: ', results);
    if (results) {
        const notionNotes = results.map((result: Result) => {
            const { type } = result;
            return result[type].text;
        });
        console.log('notionNotes: ', notionNotes);

        if (!notionNotes) return null;
    }

    if (!results) return null;

    return (
        <div>
            <Head>{/* <title>{paths.find((path) => path.params.id === query.id).params.title}</title> */}</Head>

            <SinglePageStyles>
                {/* {notionNotes.map((note, idx) => (
                    <div key={idx}>
                        {note && note.map((item, idx) => <span key={idx}>{item.plain_text}</span>)}
                        <br />
                    </div>
                ))} */}
            </SinglePageStyles>
        </div>
    );
};

export default SinglePage;
