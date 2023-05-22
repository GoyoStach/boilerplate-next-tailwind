import '@/styles/globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-blue-500 p-0 m-4">
        <div>MAIN LAYOUT</div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
