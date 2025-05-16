import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Trash2Icon } from 'lucide-react'
import axios from 'axios'
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const TierSection = () => {
    const [tiers, setTiers] = useState([])
    const [form, setForm] = useState({ name: '', startDate: '', endDate: '', price: '' })
    const [open, setOpen] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    const columns = [
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            accessorKey: 'startDate',
            header: 'Start Date',
            cell: ({ row }) => {
                return new Date(row.original.startDate).toLocaleString()
            }
        },
        {
            accessorKey: 'endDate',
            header: 'End Date',
            cell: ({ row }) => {
                return new Date(row.original.endDate).toLocaleString()
            }
        },
        {
            accessorKey: 'price',
            header: 'Price',
            cell: ({ row }) => {
                return `$${row.original.price}`
            }
        },
        {
            id: 'actions',
            header: 'Actions',
            cell: ({ row }) => {
                return (
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteTier(row.original._id)}
                        disabled={isDeleting}
                        className="bg-[#FE3D76]/80 hover:bg-[#FE3D76] text-white"
                    >
                        <Trash2Icon size={16} />
                    </Button>
                )
            }
        }
    ]

    const table = useReactTable({
        data: tiers,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleAddTier = async () => {
        if (
            form.name &&
            form.startDate &&
            form.endDate &&
            form.price &&
            (tiers.length === 0 || new Date(form.startDate) > new Date(tiers[tiers.length - 1].endDate))
        ) {
            try {
                const token = localStorage.getItem('token')

                await axios.post(`${import.meta.env.VITE_APP_URL}/tiers`, form, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })

                setForm({ name: '', startDate: '', endDate: '', price: '' })
                setOpen(false)

                fetchTiers()
            } catch (error) {
                console.error('Error adding tier:', error)
                alert('Failed to add tier. Please try again.')
            }
        } else {
            alert('Start date must be after the previous tier\'s end date.')
        }
    }

    const handleDeleteTier = async (id) => {
        try {
            setIsDeleting(true)
            const token = localStorage.getItem('token')

            await axios.delete(`${import.meta.env.VITE_APP_URL}/tiers/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            fetchTiers()
        } catch (error) {
            console.error('Error deleting tier:', error)
            alert('Failed to delete tier. Please try again.')
        } finally {
            setIsDeleting(false)
        }
    }

    const fetchTiers = async () => {
        try {
            const token = localStorage.getItem('token')

            const res = await axios.get(`${import.meta.env.VITE_APP_URL}/tiers`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setTiers(res.data)
        } catch (e) {
            console.log('Error fetching tiers:', e)
        }
    }

    useEffect(() => {
        fetchTiers()
    }, [])

    return (
        <div className="pay-box shadow-xl rounded-2xl p-8 w-full border border-[#FE3D76]">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Tiers</h2>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#FE3D76] hover:bg-[#FE3D76]/80 text-white shadow-md shadow-[#FE3D76]/20">Add Tier</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md bg-[#150813]/90 backdrop-blur-md border border-[#FE3D76]">
                        <DialogHeader>
                            <DialogTitle className="text-lg font-semibold text-white">Add Tier</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 mt-2">
                            <div className="space-y-1">
                                <Label className="text-sm text-gray-200">Name</Label>
                                <Input 
                                    name="name" 
                                    value={form.name} 
                                    onChange={handleInputChange} 
                                    className="bg-[#2C1228]/50 border-[#FE3D76]/50 text-white focus:ring-[#FE3D76] focus:border-[#FE3D76]"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-sm text-gray-200">Start Date</Label>
                                <Input
                                    type="datetime-local"
                                    name="startDate"
                                    value={form.startDate}
                                    onChange={handleInputChange}
                                    className="bg-[#2C1228]/50 border-[#FE3D76]/50 text-white focus:ring-[#FE3D76] focus:border-[#FE3D76]"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-sm text-gray-200">End Date</Label>
                                <Input
                                    type="datetime-local"
                                    name="endDate"
                                    value={form.endDate}
                                    onChange={handleInputChange}
                                    className="bg-[#2C1228]/50 border-[#FE3D76]/50 text-white focus:ring-[#FE3D76] focus:border-[#FE3D76]"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-sm text-gray-200">Price</Label>
                                <Input 
                                    name="price" 
                                    value={form.price} 
                                    onChange={handleInputChange} 
                                    className="bg-[#2C1228]/50 border-[#FE3D76]/50 text-white focus:ring-[#FE3D76] focus:border-[#FE3D76]"
                                />
                            </div>
                            <Button 
                                className="w-full mt-4 bg-[#FE3D76] hover:bg-[#FE3D76]/80 text-white" 
                                onClick={handleAddTier}
                            >
                                Add
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        
            {tiers.length > 0 ? (
                <>
                    <div className="rounded-lg border border-[#FE3D76]/30 overflow-auto bg-[#2C1228]/30 scrollbar-pink">

                        <Table>
                            <TableHeader className="bg-[#2C1228]/50">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id} className="border-b border-[#FE3D76]/30">
                                        {headerGroup.headers.map((header) => (
                                            <TableHead key={header.id} className="text-[#FE3D76] text-sm font-medium">
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(header.column.columnDef.header, header.getContext())}
                                            </TableHead>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            className="hover:bg-[#FE3D76]/10 transition border-b border-[#FE3D76]/20"
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id} className="text-white">
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-24 text-center text-gray-300">
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-between py-4 px-1">
                        <div className="space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                                className="bg-[#FE3D76] hover:bg-[#FE3D76]/80 text-white hover:text-white border-none"
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                                className=" bg-[#FE3D76] hover:bg-[#FE3D76]/80 text-white hover:text-white border-none"
                            >
                                Next
                            </Button>
                        </div>
                        <span className="text-sm text-gray-300">
                            Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
                            <strong>{table.getPageCount()}</strong>
                        </span>
                    </div>
                </>
            ) : (
                <p className="text-center text-gray-300 mt-6">No tiers available. Add some.</p>
            )}
        </div>
    )
}

export default TierSection