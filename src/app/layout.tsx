import RootStyleRegistry from './emotion';

export const metadata = {
  title: 'ARM - Login',
  description: 'Activation Resources Management',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en-US">
      <head />
      <body suppressHydrationWarning={true}>
        <RootStyleRegistry>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
