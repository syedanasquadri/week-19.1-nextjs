import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name:"HArkirat",
        email:"kirat@gmail.com"
    })
}   

export function POST(){
    return NextResponse.json({
        id:"123123",
        password:"fahhhhh"
    })
}