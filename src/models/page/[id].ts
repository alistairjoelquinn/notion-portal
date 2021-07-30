export interface Props {
    results: Result[];
    query: {
        id: string;
    };
}

// export interface Result {
//     type: keyof Result;
//     text: ResultText;
//     annotations: ResultAnnotations;
//     plain_text: string;
//     href: null;
//     heading_3?: Text;
//     paragraph?: Text;
//     bulleted_list_item?: Text;
// }

// export interface ResultAnnotations {
//     bold: boolean;
//     italic: boolean;
//     strikethrough: boolean;
//     underline: boolean;
//     code: boolean;
//     color: string;
// }

// export interface ResultText {
//     content: string;
//     link: null;
// }

// a full single result

export interface Result {
    object: string;
    id: string;
    created_time: Date;
    last_edited_time: Date;
    has_children: boolean;
    type: string;
    paragraph?: Paragraph;
    bullet_list_item?: Paragraph;
    heading_3?: Paragraph;
}

export interface Paragraph {
    text: TextElement[];
}

export interface TextElement {
    type: string;
    text: TextElementText;
    annotations: Annotations;
    plain_text: string;
    href: null;
}

export interface Annotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
}

export interface TextElementText {
    content: string;
    link: null;
}

// single text item

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

// paths

export interface Paths {
    params: PathParams;
}

export interface PathParams {
    id: string;
    title: string;
}
