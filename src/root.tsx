// @refresh reload
import { Suspense } from "solid-js";
import {
	useLocation,
	A,
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
	Link
} from "solid-start";
import "./root.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>Elijah629's Portfolio</Title>
				<Meta
					name="description"
					content="my supa-cool projects"
				/>
				<Meta charset="utf-8" />
				<Meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta
					name="color-scheme"
					content="dark"
				/>
				<Meta
					name="application-name"
					content="Elijah629"
				/>
				<Meta
					name="theme-color"
					content="#1d1e28"
				/>

				<Link
					rel="manifest"
					href="/manifest.webmanifest"
				/>

				<Link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<Link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Body class="flex flex-col bg-base text-accent">
				<Suspense>
					<ErrorBoundary>
						<Header />
						<div class="flex flex-1 flex-col gap-2 p-2">
							<Routes>
								<FileRoutes />
							</Routes>
						</div>
						<Footer />
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
