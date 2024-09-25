import Link from "next/link"
// Footer Geral do Site. 
interface Footerprops {
    mainContact: string,
    copyright?: string,
    placeholder?: string, 
    github?: string, 
    docslink?: string,
    references?: string
}
// Hardcoded values
const contact = "genericemail@gmail.com"
const copy = "All rights reserved! For now"
const place_hold = "Default"
const git_hub = "generic-boy-100"
const docs = 'docs'
const refresh = 'I got the reference!'

export default function Footer ({
    mainContact = contact,
    copyright = copy,
    github = git_hub,
    docslink = docs,
    references = refresh
}:Footerprops){
    return (
    // Main div - again...    
    <div className="flex w-full h-[200px] justify-self-end bg-gray-800">
        <div className="flex text-white">
            <h3>Contact</h3>
            <Link href={"https://mail.google.com"}>Email:{mainContact}</Link>
            <Link href={github}>Github</Link>
            <Link href={"/home"}>Copyright:{copyright}</Link>
        </div> 
        <div className="flex text-white justify-center">
            <Link href={docslink}>Documentation</Link>
            <Link href={references}>Reference List</Link>
        </div>
    </div>
    )
}

