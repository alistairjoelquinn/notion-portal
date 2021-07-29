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
