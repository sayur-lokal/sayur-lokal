import Link from 'next/link';

const RegisterRoleSelection = () => {

    return (
        <>
            <section className="overflow-hidden py-20 mt-30 bg-gray-2">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
                        <div className="text-center mb-11">
                            <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">Choose Your Account Type</h2>
                            <p className="mt-2 text-gray-600">Select the type of account you want to create</p>
                        </div>

                        <div className="mt-8 space-y-6">

                            <div className="mt-8 space-y-6">
                                <div className="space-y-4">
                                    <Link href="/signup/buyer" className="group hover:bg-[#1A693A] hover:border-green-dark border py-4 px-8 flex flex-col items-start justify-center rounded-lg border-gray-4 hover:bg-gray-100 transition duration-200 ease-in-out">
                                        <h3 className="text-lg font-medium text-dark group-hover:text-white">Pembeli</h3>
                                        <p className="text-sm text-gray-6 group-hover:text-gray-3">Saya ingin belanja dan mencari produk</p>
                                    </Link>

                                    <Link href="/signup/seller" className="group hover:bg-[#1A693A] hover:border-green-dark border py-4 px-8 flex flex-col items-start justify-center rounded-lg border-gray-4 hover:bg-gray-100 transition duration-200 ease-in-out">
                                        <h3 className="text-lg font-medium text-dark group-hover:text-white">Penjual</h3>
                                        <p className="text-sm text-gray-6 group-hover:text-gray-3">Saya ingin membuka toko online dan menjual produk</p>
                                    </Link>
                                </div>
                            </div>

                            <p className="text-center mt-6">
                                Sudah punya akun?
                                <Link href="/signin" className="underline font-medium ease-out duration-200 text-[#1A693A] hover:text-[#D75A4A] pl-2">
                                    Masuk dengan akun
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegisterRoleSelection;
