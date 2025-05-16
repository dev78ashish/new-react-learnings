import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import Background from '../../Background';

const SingleBlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const getBlog = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${import.meta.env.VITE_APP_URL}/blogs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setBlog(res.data.blog);
            console.log(res.data.blog);
        } catch (err) {
            setError(err.message || "Failed to fetch blog");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getBlog();
    }, [id]);

    return (
        <div className='max-h-screen overflow-y-scroll'>
            <Background />
            <div className="relative min-h-screen pt-8 pb-16">
                <div className="max-w-3xl mx-auto p-6 backdrop-blur-[20px] bg-white/10 rounded-xl shadow-2xl text-white">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-pulse text-lg">Loading...</div>
                        </div>
                    ) : error ? (
                        <div className="text-red-400 p-4 bg-red-900/30 rounded-lg">
                            <p>{error}</p>
                        </div>
                    ) : !blog ? (
                        <div className="text-amber-400 p-4 bg-amber-900/30 rounded-lg">
                            <p>Blog not found.</p>
                        </div>
                    ) : (
                        <>
                            <Button 
                                variant="ghost" 
                                className="mb-6 text-white " 
                                onClick={() => navigate(-1)}
                            >
                                <ArrowLeft className="mr-2 w-4 h-4" /> Back
                            </Button>

                            <h1 className="text-4xl font-bold mb-4 text-white/90">{blog.heading}</h1>

                            <div className="flex items-center text-white/70 mb-6">
                                <Calendar className="mr-2 w-4 h-4" />
                                <time dateTime={blog.createdAt}>
                                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>

                            <div className="mb-8">
                                <img
                                    src={`${import.meta.env.VITE_APP_URL}/${blog.image}`}
                                    alt={blog.title}
                                    className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            <h2 className="text-2xl font-semibold mb-6 text-white/95">{blog.title}</h2>

                            <div className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-4">
                                {blog.description.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleBlogPage;