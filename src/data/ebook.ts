import { type CollectionEntry, getCollection } from "astro:content";
import { get } from '@/api/book'

/** filter out draft posts based on the environment */
export async function getAllbooks(): Promise<CollectionEntry<"ebook">[]> {
    let res = await get();
	return await getCollection("ebook").then((books) => {
        return [...res?.map((el:any) => ({
            id: el.attributes.title,
            data: { objectId: el.id, ...el.attributes, file: el.attributes.url.replace('dailynote', 'blog-cloud'), img: el.attributes?.img.replace('dailynote', 'blog-cloud') || '' },
            collection: 'ebook'
        })) || [], ...books.filter(el => el.data.title)]
    });
}