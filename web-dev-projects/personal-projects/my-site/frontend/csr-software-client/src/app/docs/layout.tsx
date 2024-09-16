import type { Metadata } from "next";
// Metadados da View.
export const metadata: Metadata = {
    title:'CSRF - Get Started',
    description: 'The great library awaits...'
}
// Main Func OUT
export default function DocsLayout( {children} : Readonly<{children: React.ReactNode}> ) {
   return (
    <html>
        <body>
            {children}
        </body>
    </html>
   );
}