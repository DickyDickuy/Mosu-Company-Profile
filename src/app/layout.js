import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "MOSU | Modern Solution - Tech Venture & Digital Studio",
  description:
    "A student-driven tech venture delivering high-performance web development, IT infrastructure, and UI/UX design. 5 paid contracts delivered in 9 months.",
  keywords: ["MOSU", "Modern Solution", "Web Development", "IT Infrastructure", "UI/UX Design", "Next.js", "Tech Venture"],
  authors: [{ name: "Modern Solution Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js?token=c8485c49-a280-4615-a609-40269a1954b0"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}

