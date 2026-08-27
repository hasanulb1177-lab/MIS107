import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"NPM Services — Smart Passport, Mobility & Immigration",description:"A high-fidelity MIS-107 academic prototype for digital passport, mobility and immigration services in Bangladesh."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
