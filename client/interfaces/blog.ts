interface ImageFormat {
    ext: string;
    hash: string;
    height: number;
    mime: string;
    name: string;
    path: any;
    size: number;
    url: string;
    width: number;
}

export interface SingleBlogPostData {
    id: number;
    attributes: {
        date: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        title: string;
        slug: string;
        publishedAt: Date;
        category: string;
        Seo: [
            {
                metaDescription: string;
                metaTitle: string;
                metaKeywords: string;
            }
        ];
        postImage: {
            data: {
                attributes: {
                    alternativeText: string;
                    caption: string;
                    createdAt: Date;
                    ext: string;
                    format: {
                        small: ImageFormat;
                        medium: ImageFormat;
                        thumbnail: ImageFormat;
                    };
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    previewUrl: any;
                    provider: string;
                    provider_metadata: any;
                    size: number;
                    updatedAt: Date;
                    url: string;
                    width: number;
                };
            };
        };
    };
}

export interface SingleBlogPostProps {
    post: SingleBlogPostData;
    meta: {};
}
export interface BlogPostProps {
    post: {
        data: [SingleBlogPostData];
        meta: {};
    };
}
