import "./globals.css";

export const metadata = {
  title: "MOSU | Modern Solution - Tech Venture & Digital Studio",
  description:
    "A student-driven tech venture delivering high-performance web development, IT infrastructure, and UI/UX design. 5 paid contracts delivered in 9 months.",
  keywords: ["MOSU", "Modern Solution", "Web Development", "IT Infrastructure", "UI/UX Design", "Next.js", "Tech Venture"],
  authors: [{ name: "Modern Solution Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

