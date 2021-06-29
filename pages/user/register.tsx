import React, {useState} from "react";

const Register: React.FC = () => {
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
        <div className="grid place-items-center mb-10 ">
            <div className="card bg-base-200 red-shadow lg:w-4/12" style={{backgroundColor: '#292d35'}}>
                <div className="form-control card-body">
                    <div className="text-center text-3xl font-bold card-title">Register</div>
                    <form name="registration_form" id="registration_form" action=''>
                                <label className="label"><span className="label-text">First Name</span></label>
                                <input className="input input-bordered w-full" type="text"
                                       name="first_name" id="first_name" value={formData.first_name}
                                       onChange={handleChange}
                                       placeholder="Enter Your First Name"/>
                                <label className="label"><span className="label-text">Last Name</span></label>
                                <input className="input input-bordered w-full" type="email"
                                       name="last_name" id="last_name" value={formData.last_name}
                                       onChange={handleChange}
                                       placeholder="Enter Your Last Name"/>
                                <label className="label"><span className="label-text">Email</span></label>
                                <input className="input input-bordered w-full" type="text"
                                       name="email" id="email" value={formData.email} onChange={handleChange}
                                       placeholder="Enter Your Email"/>
                                <label className="label"><span className="label-text">Password</span></label>
                                <input className="input input-bordered w-full" type="password"
                                       name="password" id="password" value={formData.password} onChange={handleChange}
                                       placeholder="Enter A Password"/>
                                <label className="label"><span className="label-text">Confirm Password</span></label>
                                <input className="input input-bordered w-full" type="password"
                                       name="password_confirmation" id="password_confirmation"
                                       value={formData.password_confirmation} onChange={handleChange}
                                       placeholder="Re-Enter Your Password"/>
                            <div className="form-control justify-center mt-5">
                                <button
                                    className="btn btn-outline ">
                                    Sign Up
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register