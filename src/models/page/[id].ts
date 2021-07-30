export interface Props {
    results: Result[];
    query: {
        id: string;
    };
}

// a full single result

export interface Result {
    object: string;
    id: string;
    created_time: Date;
    last_edited_time: Date;
    has_children: boolean;
    type: 'paragraph' | 'bullet_list_item' | 'heading_3' | 'unsupported';
    paragraph?: Paragraph;
    bullet_list_item?: Paragraph;
    heading_3?: Paragraph;
    unsupported?: any;
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
