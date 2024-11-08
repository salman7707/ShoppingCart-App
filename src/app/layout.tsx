import "./globals.css";
import Navbar from "../components/navbar";
import StoreProvider from "./storeProvider";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
 

  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
