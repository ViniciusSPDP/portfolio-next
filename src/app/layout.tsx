// app/layout.tsx
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Script from 'next/script'; // 1. Importe o componente Script
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfólio Saraiva',
  description: 'Portfólio pessoal de Vinicius Saraiva, desenvolvido com Next.js e Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${montserrat.className} bg-gray-900 text-white overflow-x-hidden`}>
        {children}

        {/* 2. Adicione o script do Chatwoot aqui */}
        <Script id="chatwoot-sdk" strategy="afterInteractive">
          {`
            (function(d,t) {
                var BASE_URL="https://app-chatwoot-atualizado.v1dvzt.easypanel.host";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({
                    websiteToken: '1vAahLJUWKZ9tk2JrJTxA6Yp',
                    baseUrl: BASE_URL
                  })
                }
              })(document,"script");
          `}
        </Script>
      </body>
    </html>
  );
}