export interface ParamsBase {
    params: Params;
}

export interface Params {
    id: string;
    title: string;
}

export interface Result {
    object: string;
    id: string;
    created_time: Date;
    last_edited_time: Date;
    has_children: boolean;
    type: string;
    unsupported: any;
}

export interface Props {
    results: Result[];
}
