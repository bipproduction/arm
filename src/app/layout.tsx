import { Pengaman } from '@/modules/_global';
import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en-US">
      <head />
      <body suppressHydrationWarning={true}>
        <RootStyleRegistry>
          <Pengaman>
            {children}
          </Pengaman>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
