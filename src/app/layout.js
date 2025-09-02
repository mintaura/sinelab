import "./globals.css";

export const metadata = {
  title: "DevHub Pro | Businesses with Innovative Tools",
  description:
    "DevHub is the maker of Dokan Multivendor, WP Project Manager, WP User Frontend, WP ERP and many more",
  openGraph: {
    images: ["https://i.ibb.co/zTfvxX49/seo.png"],
  },
  twitter: {
    images: ["https://i.ibb.co/zTfvxX49/seo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
