declare global {
    interface StrapiPagination {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }

    interface StrapiMeta {
        pagination: StrapiPagination
    }

    interface StrapiBase<T> {
        id: number;
        attributes: T;
    }

    interface StrapiResponse<T> {
        data: StrapiBase<T>,
        meta: StrapiMeta;
    }
    interface StrapiAttributes {
        createdAt: Date,
        updatedAt: Date,
        publishedAt: Date
    }

    interface SocialMedia extends StrapiAttributes {
        id: number;
        __component: string;
        links: Link[];
    }

    interface Link {
        id: number;
        text: string;
        icon: string;
        href: string;
        target: string;
      }
}

export {};