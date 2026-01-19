import { getPostData, getSortedPostsData } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import { Calendar, User, ChevronLeft, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = getPostData(slug);

    if (!post) {
        notFound();
    }

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = post.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return (
        <article className="min-h-screen transition-colors duration-300 bg-white dark:bg-black text-gray-900 dark:text-white pb-20">
            {/* Scroll Progress Bar (Sticky) */}
            <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-200 dark:bg-gray-800">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-150"
                    id="scroll-progress"
                    style={{ width: '0%' }}
                />
            </div>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.addEventListener('scroll', () => {
                            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                            const scrolled = (winScroll / height) * 100;
                            const progress = document.getElementById('scroll-progress');
                            if (progress) progress.style.width = scrolled + '%';
                        });
                    `,
                }}
            />

            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full mb-12 overflow-hidden">
                {post.image ? (
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
                )}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

                <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="container mx-auto px-6 max-w-4xl pb-16">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 mb-8 text-white/80 hover:text-cyan-400 transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium"
                        >
                            <ChevronLeft size={16} /> Back to Blog
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-xl animate-fade-in-up">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-white/90">
                            <div className="flex items-center gap-2 bg-cyan-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30">
                                <Calendar size={18} className="text-cyan-400" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                <User size={18} className="text-gray-300" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                <Clock size={18} className="text-gray-300" />
                                <span>{readingTime} min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl">
                <div className={`prose prose-lg max-w-none transition-colors duration-300 
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:border-l-4 prose-h2:border-cyan-500 prose-h2:pl-4 prose-h2:mt-12
                    prose-h3:text-2xl
                    prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed
                    prose-li:text-gray-600 dark:prose-li:text-gray-400
                    prose-strong:text-cyan-600 dark:prose-strong:text-cyan-400
                    prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline
                    prose-hr:border-gray-200 dark:prose-hr:border-gray-800
                    prose-blockquote:border-cyan-500 prose-blockquote:bg-cyan-500/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg
                    dark:prose-invert`}>
                    <ReactMarkdown
                        components={{
                            h2: ({ node: _node, ...props }) => <h2 className="scroll-mt-32" {...props} />,
                            h3: ({ node: _node, ...props }) => <h3 className="scroll-mt-32" {...props} />,
                            a: ({ node: _node, ...props }) => <a target="_blank" rel="noopener noreferrer" {...props} />,
                            hr: () => <hr className="my-12" />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>

                <footer className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-cyan-500/10 hover:text-cyan-500 transition-all text-sm font-medium">
                                <Share2 size={18} /> Share Post
                            </button>
                        </div>
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-bold hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden text-center"
                        >
                            <span className="relative z-10">Still have questions? Let&apos;s talk!</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}} />
        </article>
    );
}
