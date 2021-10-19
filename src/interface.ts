export interface BlogInfo {
    name: string;
    url: string;
    secondaryUrl: string;
    nickname: string;
    title: string;
    description: string;
    default: "Y" | "N";
    blogIconUrl: string;
    faviconUrl: string;
    profileThumbnailImageUrl: string;
    profileImageUrl: string;
    role: string;
    blogId: string;
    statistics: {
        post: string;
        comment: string;
        trackback: string;
        guestbook: string;
        invitation: string;
    };
}
export interface PostInfo {
    access_token: string;
    output: "json" | "xml";
    blogName: string;
    title: string;
    content?: string;
    visibility?: string;
    category?: string;
    published?: string;
    slogan?: string;
    tag?: string;
    acceptComment?: string;
    password?: string;
    postId?: string;
}

export interface TistoryFormat {
    status: string;
    error_message?: string;
    item?: BlogInfo | PostInfo;
    url?: string;
}

export interface CategoryInfo {
    id: string;
    name: string;
    parent: string;
    label: string;
    entries: string;
}
