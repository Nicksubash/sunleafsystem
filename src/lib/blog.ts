import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    content: string;
    image?: string;
}

export function getSortedPostsData(): Omit<BlogPost, 'content'>[] {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);

            return {
                slug,
                title: matterResult.data.title,
                description: matterResult.data.description,
                date: matterResult.data.date instanceof Date
                    ? matterResult.data.date.toISOString().split('T')[0]
                    : matterResult.data.date,
                author: matterResult.data.author,
                image: matterResult.data.image,
            };
        });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): BlogPost | null {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        slug,
        content: matterResult.content,
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date instanceof Date
            ? matterResult.data.date.toISOString().split('T')[0]
            : matterResult.data.date,
        author: matterResult.data.author,
        image: matterResult.data.image,
    };
}
