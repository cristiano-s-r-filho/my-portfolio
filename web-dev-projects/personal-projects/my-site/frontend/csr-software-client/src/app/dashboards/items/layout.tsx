import type { Metadata } from "next";
// Metadados da View.
export const metadata: Metadata = {
    title:'Itens',
    description: 'Things you got on your journey'
}
// Main Func OUT
export default function ItensLayout( {children} : Readonly<{children: React.ReactNode}> ) {
   return (
    <html>
        <body>
            {children}
        </body>
    </html>
   );
}