import React, {useState} from "react";

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData(data => ({...data, [e.target.id]: e.target.value}))
    }

    return (
        <div className="w-full grid place-items-center">
            <div className="p-10 card bg-base-200 red-shadow" style={{backgroundColor: '#292d35'}}>
                <div className="text-center text-3xl font-bold">Register</div>
                <div className="divider"/>
                <div className="form-control">
                    <form name="registration_form" id="registration_form" action=''>
                        <div className="">
                            <div className="mb-4 form-control">
                                <label className="label"><span className="label-text">Email</span></label>
                                <input className="input input-bordered" type="text"
                                       name="email" id="email" value={formData.email} onChange={handleChange}
                                       placeholder="Enter Your Email"/>
                            </div>
                            <div className="mb-4">
                                <label className="label"> <span className="label-text">Password</span> </label>
                                <input className="input input-bordered w-full" type="password"
                                       name="password" id="password" value={formData.password} onChange={handleChange}
                                       placeholder="Enter A Password"/>
                                <a href="#" className="label-text-alt">Forgot username?</a>
                            </div>
                        </div>
                        <div className="form-control mt-5 ">
                            <button
                                className="btn btn-outline">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login