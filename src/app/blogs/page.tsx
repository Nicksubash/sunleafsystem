import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default async function BlogListing() {
    const posts = getSortedPostsData();

    return (
        <div className="min-h-screen py-20 transition-colors duration-300 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Our Blog
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Stay updated with the latest news, tutorials, and insights from Sunleaf System.
                    </p>
                </header>

                <div className="grid gap-8">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="group p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 hover:border-cyan-500/50 hover:shadow-cyan-500/10 dark:hover:shadow-cyan-900/20"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 text-sm">
                                <div className="flex items-center gap-1.5 text-cyan-500">
                                    <Calendar size={16} />
                                    <span>{post.date}</span>
                                </div>
                                <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                                    <User size={16} />
                                    <span>{post.author}</span>
                                </div>
                            </div>

                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-cyan-500 transition-colors">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-lg mb-6 line-clamp-2 text-gray-600 dark:text-gray-400">
                                {post.description}
                            </p>

                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-2 font-semibold text-cyan-500 hover:gap-3 transition-all"
                            >
                                Read More <ArrowRight size={20} />
                            </Link>
                        </article>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            No posts found. Stay tuned!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
