export interface IL1Data{
    id: number;
    title: string;
    image_url: string;
    data: string[];
}

export interface IL3Data{
    id: number;
    title: string;
    data: IL3DataItem[];
}

export interface IL3DataItem{
    name: string,
    image_url: string,
}