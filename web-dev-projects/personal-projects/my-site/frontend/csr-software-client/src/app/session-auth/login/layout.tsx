import type { Metadata } from "next";
// Metadados da View.
export const metadata: Metadata = {
    title:'Login',
    description: '::Enter the Madness request on board:: - [EXIT CODE 9000]'
}
// Main Func OUT
export default function LoginLayout( {children} : Readonly<{children: React.ReactNode}> ) {
   return (
    <html>
        <body>
            {children}
        </body>
    </html>
   );
}