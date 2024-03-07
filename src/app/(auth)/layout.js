import { Inter } from "next/font/google";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PageHeader from "@/components/common-header";
import PageFooter from "@/components/page-footer";
import Page_Header from "@/components/page-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Page_Header />
          {/* <Loging/> */}
          {children}
          <PageFooter />
        </div>
      </body>
    </html>
  );
}
