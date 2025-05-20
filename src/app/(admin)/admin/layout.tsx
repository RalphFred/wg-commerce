import AdminTopbar from "@/components/admin/AdminTopbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AdminTopbar />
        {children}
      </body>
    </html>
  );
}
