const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-sans"> {children}</body>
    </html>
  );
};
export default RootLayout;
