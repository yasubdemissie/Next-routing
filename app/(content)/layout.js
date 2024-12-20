import MainHeader from "@/Components/MainHeader";
import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
  keywords: ["Next.js", "Routing", "Rendering"],
  publisher: "Yasub Demissie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
