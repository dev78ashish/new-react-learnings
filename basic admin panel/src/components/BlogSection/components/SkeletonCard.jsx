import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
                <div
                    key={i}
                    className="border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-black/40 backdrop-blur-md min-w-[150px] w-full max-w-full transform hover:-translate-y-1"
                >
                    <div className="relative">
                        <Skeleton className="w-full h-52 object-cover bg-white/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-bold text-white/90 line-clamp-1">
                            <Skeleton className="h-4 w-[80%] bg-white/10 mb-2" />
                        </h3>
                        <h4 className="text-md text-white/70 font-medium mb-2">
                            <Skeleton className="h-4 w-[60%] bg-white/10 mb-2" />
                        </h4>
                        <div className="text-sm text-white/80 mb-4 line-clamp-2">
                            <Skeleton className="h-4 w-full bg-white/10 mb-1" />
                            <Skeleton className="h-4 w-[90%] bg-white/10" />
                        </div>

                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/10">
                            <Skeleton className="h-4 w-[70px] bg-white/10" />
                            <div className="flex gap-3">
                                <Skeleton className="h-4 w-4 bg-white/10 rounded" />
                                <Skeleton className="h-4 w-4 bg-white/10 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}