export const metadata = {
  title: "Next on CI",
  description: "A Next.js app served live from a CI runner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
