import type { Metadata } from "next";
// Metadados da View.
export const metadata: Metadata = {
    title:'CSRF - Get Started',
    description: 'A new light joins the crew...'
}
// Main Func OUT
export default function SignupLayout( {children} : Readonly<{children: React.ReactNode}> ) {
   return (
    <html>
        <body>
            {children}
        </body>
    </html>
   );
}