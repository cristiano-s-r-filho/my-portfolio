import type { Metadata } from "next";
// Metadados da View.
export const metadata: Metadata = {
    title:'Analytics',
    description: 'ANALYSING >>>> ...'
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