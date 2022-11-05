import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const originalRenderPage = ctx.renderPage;
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => App,
				enhanceComponent: (Component) => Component,
			});
		const initialProps = await Document.getInitialProps(ctx);
		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="UTF-8" />
					{/* google fonts */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Oswald:wght@500&family=Teko:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* <Script
						id="video"
						strategy="lazyOnload"
						dangerouslySetInnerHTML={{
							__html: `document.getElementById('vid')?.play();`,
						}}
					></Script> */}
				</body>
			</Html>
		);
	}
}

export default MyDocument;
