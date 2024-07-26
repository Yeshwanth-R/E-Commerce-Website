"use client"
import LayoutMain from '@/components/MainLayout'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { toast, Toaster } from 'sonner'


const page = () => {
    const params = useParams();
    const router = useRouter();
    const goBack = () => {
        console.log("Clicked")
        router.push("/products")
    }
    const deletePro = () => {
        const myPromise = async () => {
            let id = params.id[0]
            console.log(id)
            let res = await fetch(`/api/findProducts/${params.id[0]}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(id),
            });
            if (res.ok) {
                const result = await res.json();
                console.log(result);
            } else {
                console.error("Failed to add product", await res.text());
            }


        };

        myPromise()
            .then(() => {
                toast.success(`Product deleted Successfully`, {
                    onAutoClose: () => router.push("/products"),
                    duration: 2000
                });
            })
            .catch((error) => {
                toast.error("Error Deleting the product", error);
            });

    }


    return (
        <LayoutMain>
            <Toaster position='top-right' richColors />
            <div tabIndex="-1" className="fixed backdrop-blur-sm inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-blue-50 rounded-lg shadow">
                        <button
                            type="button"
                            onClick={goBack}
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-black ">Are you sure you want to delete this product ?</h3>
                            <button
                                onClick={deletePro}
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                            >
                                Yes, I'm sure
                            </button>
                            <button
                                type="button"
                                onClick={goBack}
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                            >
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}

export default page
