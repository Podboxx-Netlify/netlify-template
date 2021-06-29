import {GetServerSideProps} from "next";
import React, {useState} from "react";

interface Data {
    website?: [title: string]
}


const Register: React.FC<{ data: Data }> = ({data}) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData(data => ({...data, [e.target.id]: e.target.value}))
    }

    return (
        <div className="w-full grid place-items-center">
            <div className="rounded-2xl justify-center grid place-items-center red-shadow" style={{backgroundColor: '#292d35'}}>
                <div
                    className="mx-16 py-4 px-8 text-center text-gray-300 text-2xl font-bold border-b border-grey-300 ">Register
                </div>
                <form name="registration_form" id="registration_form" action=''>
                    <div className="py-4 px-8 grid grid-rows-2 gap-x-5 mt-5">
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2">First Name</label>
                            <input className="border rounded w-full py-2 px-3 text-grey-darker " type="text"
                                   name="first_name" id="first_name" value={formData.first_name} onChange={handleChange}
                                   placeholder="Enter Your First Name"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2">Last Name</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="email"
                                   name="last_name" id="last_name" value={formData.last_name} onChange={handleChange}
                                   placeholder="Enter Your Last Name"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                   name="email" id="email" value={formData.email} onChange={handleChange}
                                   placeholder="Enter Your Email"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2">Password</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="password"
                                   name="password" id="password" value={formData.password} onChange={handleChange}
                                   placeholder="Enter A Password"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2">Confirm Password</label>
                            <input className="border rounded w-full py-2 px-3 text-grey-darker" type="password"
                                   name="password_confirmation" id="password_confirmation"
                                   value={formData.password_confirmation} onChange={handleChange}
                                   placeholder="Re-Enter Your Password"/>
                        </div>
                    </div>
                    <div className="mb-4 text-center">
                        <button
                            className="mb-5 mx-16 rounded-full py-1 px-24 bg-gray-300 hover:border-red-900 border-4">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register