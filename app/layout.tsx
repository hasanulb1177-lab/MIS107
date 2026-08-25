import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"NPM Services — Academic Prototype",description:"Smart Passport & Mobility Services MIS107 academic prototype."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
