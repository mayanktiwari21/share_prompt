import Provider from '@components/Provider';
import Nav from '@components/Nav';
import '@styles/globals.css';

export const metadata = {
  title: 'Share Prompt',
  description: 'Share your creative AI prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
