import React, { useState } from "react";
import { Plus, Pencil, Trash, LucideSquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogDialog from "./components/BlogDialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { SkeletonCard } from "./components/SkeletonCard";
import { useGetBlogsQuery, useDeleteBlogMutation } from "../../redux/slices/blogApiSlice";

const BlogSection = () => {
    const { data: blogData = [], error, isLoading, refetch } = useGetBlogsQuery();
    const [deleteBlog] = useDeleteBlogMutation();
    const [blogToEdit, setBlogToEdit] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const handleDeleteBlog = async (id) => {
        try {
            await deleteBlog(id).unwrap();
        } catch (err) {
            console.log(err.data?.message || err.error || "Failed to delete blog");
        }
    };

    const handleBlogUpdated = () => {
        setBlogToEdit(null);
    };

    function shortText(text) {
        return text.split(' ').slice(0, 5).join(' ') + '...';
    }

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(blogData.length / blogsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="w-full p-6 rounded-xl border border-[#FE3D76]/30">
            <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Your Blog Collection</h2>
                <BlogDialog onBlogAdded={refetch} blogToEdit={null}>
                    <Button className="cursor-pointer shadow-custom bg-[#FE3D76] hover:bg-[#FE3D76]/80 text-white font-medium px-4 py-2 rounded-lg transition-all">
                        <span>Add Blog</span>
                        <Plus className="w-4 h-4 ml-2" />
                    </Button>
                </BlogDialog>
            </div>

            {isLoading ? (
                <SkeletonCard />
            ) : error ? (
                <div className="p-4 border rounded-md bg-[#FE3D76]/10 border-[#FE3D76]/40 text-[#FE3D76]">
                    <p>{error?.data?.message || error?.error || "Failed to fetch blogs"}</p>
                    <Button
                        variant="outline"
                        className="mt-2 border-[#FE3D76]/50 text-white hover:bg-[#FE3D76]/20"
                        onClick={refetch}
                    >
                        Retry
                    </Button>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentBlogs.length > 0 ? (
                            currentBlogs.map((blog, index) => (
                                <div
                                    key={blog._id || index}
                                    className="border border-[#FE3D76]/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg shadow-[#FE3D76]/10 transition bg-[#2C1228]/50 min-w-[150px] hover-shadow w-full max-w-full transform hover:-translate-y-1"
                                >
                                    <div className="relative">
                                        <img
                                            src={`${import.meta.env.VITE_APP_URL}/${blog.image}`}
                                            alt={blog.title}
                                            className="w-full h-52 object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/600x400?text=Blog+Image";
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-white line-clamp-1">{blog.title}</h3>
                                        <h4 className="text-md text-gray-300 font-medium mb-2">{shortText(blog.heading)}</h4>
                                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{blog.description}</p>

                                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#FE3D76]/20">
                                            <Link to={`/blogs/${blog._id}`} className="text-[#FE3D76] hover:text-[#FE3D76]/80 font-medium text-sm flex items-center transition-colors">
                                                Read More <LucideSquareArrowOutUpRight size={16} className="ml-1" />
                                            </Link>
                                            <div className="flex gap-3">
                                                <BlogDialog
                                                    onBlogUpdated={handleBlogUpdated}
                                                    blogToEdit={blog}
                                                >
                                                    <button className="text-gray-300 hover:text-[#FE3D76] transition-colors">
                                                        <Pencil className="w-4 h-4" />
                                                    </button>
                                                </BlogDialog>

                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <button className="text-gray-300 hover:text-[#FE3D76] transition-colors">
                                                            <Trash className="w-4 h-4" />
                                                        </button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent className="bg-[#150813]/90 backdrop-blur-md border border-[#FE3D76]/30">
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle className="text-white">Are you sure?</AlertDialogTitle>
                                                            <AlertDialogDescription className="text-gray-300">
                                                                This action cannot be undone. This will permanently delete the blog
                                                                "{blog.title}".
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel className="bg-transparent border-[#FE3D76]/50 text-gray-200 hover:bg-[#FE3D76]/20">Cancel</AlertDialogCancel>
                                                            <AlertDialogAction
                                                                onClick={() => handleDeleteBlog(blog._id)}
                                                                className="bg-[#FE3D76]/80 hover:bg-[#FE3D76] text-white"
                                                            >
                                                                Delete
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full">
                                <div className="text-center py-12 bg-[#2C1228]/50 rounded-lg border border-dashed border-[#FE3D76]/40">
                                    <p className="text-gray-300">No blogs found. Create one now!</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {blogData.length > blogsPerPage && (
                        <div className="mt-10 flex justify-center">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            className={`${currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:text-[#FE3D76]"} text-white`}
                                        />
                                    </PaginationItem>

                                    {pageNumbers.map((number) => (
                                        <PaginationItem key={number}>
                                            <PaginationLink
                                                onClick={() => paginate(number)}
                                                isActive={currentPage === number}
                                                className={`cursor-pointer ${currentPage === number ? "bg-[#FE3D76] text-white hover:bg-[#FE3D76]/80" : "text-white hover:text-[#FE3D76]"}`}
                                            >
                                                {number}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    <PaginationItem>
                                        <PaginationNext
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:text-[#FE3D76]"} text-white`}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default BlogSection;