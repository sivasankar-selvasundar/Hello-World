import './globals.css';
import { RudraProvider } from '../components/RudraProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900 m-0 p-0">
        <RudraProvider>
          {children}
        </RudraProvider>
      </body>
    </html>
  );
}