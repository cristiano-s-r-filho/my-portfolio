import type { Metadata } from "next";
// Metadados da View.
export const metadata: Metadata = {
    title:'CSRF',
    description: 'Welcome to the dreamscape...'
}
// Main Func OUT
export default function HomeLayout({children}:Readonly<{
    children: React.ReactNode
}>) {
   return (
    <html>
        <body>
            {children}
        </body>
    </html>
   );
}