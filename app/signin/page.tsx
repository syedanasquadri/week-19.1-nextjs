'use client'

import axios from "axios"

export default function Signin(){
    return <div className="w-screen h-screen flex items-center justify-center">
        <div className="border p-2">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin",{
                username,
                password
            })
        }}>Sign in</button>
        </div>
    </div>
}