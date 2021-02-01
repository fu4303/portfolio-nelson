function GlobalStyle(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }

        html {
          scroll-behavior: smooth;
        }

        :root {
          --bg-primary-hex: #ffffff;
          --bg-primary-rgba: rgba(255, 255, 255, 0.8);

          --bg-secondary: #f1f5f8;

          --text-primary: #232e3e;
          --text-secondary: #517095;
          --text-underline: rgba(94, 136, 186, 0.6);

          --color-primary: #232e3e;
          --logo-primary: #232e3e;

          --color-chalk: #006ef0;
          --color-chalk-secondary: #f1f8ff;

          --color-experts: #22722d;
          --color-experts-secondary: #f1fbf3;

          --github-text: #24292e;

          --font-xs: 14px;
          --font-s: 16px;
          --font-m: 18px;
          --font-l: 26px;
        }

        @media only screen and (min-width: 722px) {
          :root {
            --font-xs: 16px;
            --font-s: 18px;
            --font-m: 20px;
            --font-l: 28px;
          }
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --bg-primary-hex: #212831;
            --bg-primary-rgba: rgba(33, 40, 49, 0.8);

            --bg-secondary: #1a2028;

            --text-primary: #f1f5f8;
            --text-secondary: #7a91ae;
            --text-underline: #7a91ae;

            --color-primary: #f1f5f8;
            --logo-primary: #f1f5f8;

            --color-chalk: #1a83ff;
            --color-chalk-secondary: #1a212d;

            --color-experts: #1e992f;
            --color-experts-secondary: #1a2620;

            --github-text: #ffffff;
          }
        }

        body {
          background-color: var(--bg-primary-hex);
          font-family: "Sohne", -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text-primary);
          overflow-y: scroll;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        body.dark {
          background-color: var(--bg-primary-hex);
          color: var(--text-primary);
        }

        html,
        body {
          width: 100%;
          height: 100%;
        }

        html {
          font-size: 16px;
          -webkit-overflow-scrolling: touch;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          line-height: 1.46;
        }

        footer {
          margin-bottom: 2rem;
          font-size: var(--font-xs);
          color: var(--text-secondary);
        }

        @media only screen and (min-width: 722px) {
          footer {
            margin-bottom: 1rem;
          }
        }

        img {
          max-width: 100%;
          height: auto;
        }

        ::selection {
          color: var(--bg-primary-hex);
          background: var(--text-primary);
          text-shadow: none;
        }

        @media only screen and (min-width: 722px) {
          html {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  )
}

export default GlobalStyle
