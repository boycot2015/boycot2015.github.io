{/* Inlined to avoid FOUC. This is a parser blocking script. */}
const ThemeProviderInit = () => {
	const lightModePref = window.matchMedia("(prefers-color-scheme: light)");
	function getUserPref() {
		const storedTheme = typeof localStorage !== "undefined" && localStorage.getItem("theme");
		return storedTheme || (lightModePref.matches ? "light" : "dark");
	}
	const rootInDarkMode = () => getUserPref() === "dark";

	function setTheme(newTheme:any) {
		if (newTheme !== "light" && newTheme !== "dark") {
			return console.warn(
				`Invalid theme value '${newTheme}' received. Expected 'light' or 'dark'.`,
			);
		}

		const root = document.documentElement;

		// root already set to newTheme, exit early
		if (newTheme === root.getAttribute("data-theme")) {
			return;
		}

		root.setAttribute("data-theme", newTheme);

		if (typeof localStorage !== "undefined") {
			localStorage.setItem("theme", newTheme);
		}
	}

	// initial setup
	setTheme(getUserPref());

	// View Transitions hook to restore theme
	document.addEventListener("astro:after-swap", () => setTheme(getUserPref()));
	// listen for theme-change custom event, fired in src/components/ThemeToggle.astro
	interface ThemeChangeEvent extends Event {
		detail: {
			clientX: number;
			clientY: number;
			theme: string;
		};
	}

	document.addEventListener("theme-change", (e) => {
		// console.log("theme-change event triggered:", e.detail);
		setTheme((e as ThemeChangeEvent).detail.theme);
		// const x = (e as ThemeChangeEvent).detail.clientX;
		// const y = (e as ThemeChangeEvent).detail.clientY;
		// const endRadius = Math.hypot(
		// 	Math.max(x, window.innerWidth - x),
		// 	Math.max(y, window.innerHeight - y),
		// );

		// // 兼容性处理
		// if (!document.startViewTransition) {
		// 	console.warn("View Transitions API not supported. Falling back to setTheme.");
		// 	setTheme((e as ThemeChangeEvent).detail.theme);
		// 	return;
		// }

		// const transition = document.startViewTransition(async () => {
		// 	console.log("Setting theme to:", (e as ThemeChangeEvent).detail.theme);
		// 	setTheme((e as ThemeChangeEvent).detail.theme);
		// 	return endRadius;
		// });

		// transition.ready.then(() => {
		// 	console.log("View transition ready. Animating clipPath.");
		// 	const clipPath = [
		// 		`circle(0px at ${x}px ${y}px)`,
		// 		`circle(${endRadius}px at ${x}px ${y}px)`,
		// 	];
		// 	document.body.style.transition = "none";
		// 	document.body.animate(
		// 		{
		// 			clipPath: !rootInDarkMode() ? [...clipPath].reverse() : clipPath,
		// 		},
		// 		{
		// 			duration: 500,
		// 			easing: "ease-in",
		// 			pseudoElement: !rootInDarkMode()
		// 				? "::view-transition-old(root)"
		// 				: "::view-transition-new(root)",
		// 		},
		// 	);
		// }).catch((err) => {
		// 	console.error("Error during view transition:", err);
		// });
	});

	// listen for prefers-color-scheme change.
	lightModePref.addEventListener("change", (e) => setTheme(e.matches ? "light" : "dark"));
};
export default () => ThemeProviderInit();