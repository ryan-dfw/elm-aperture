export type GalleryLayout =
    | 'landscape'
    | 'mixed'
    | 'portrait';

export type GalleryImageDetail = [
    title: string,
    detail: string,
    photographer: string,
    desktopOffset: number,
    mobileOffset: number
];