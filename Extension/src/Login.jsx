import { useState } from "react";
function Login() {
    return (
        <div className="f border border-2 border-black h-screen">
            <div className="border border-2 border-red text-red-500">
                <label className="text-red-500">Enter UserName
                    <input className="" /></label>
                <label className="text-grey-500">Password<input className=" " /></label>
            </div>
        </div>
    );
}
export default Login;