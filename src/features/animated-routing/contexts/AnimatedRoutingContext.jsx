import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../utils/constants";

const AnimatedRoutingContext = createContext();

function AnimatedRoutingProvider({ children }) {
	const navigate = useNavigate();

	const { pathname } = useLocation();

	const [isAnimating, setIsAnimating] = useState(false);

	// storing the previous route in order to compare it with current one
	const prev = useRef(pathname);

	// comparing the prev route with the current one to check whether the route has changed
	const isRouteChanged = prev.current !== pathname;

	// this state hold the index of the current route in the "routes" array to be able to know which the next/prev route when scrolling
	const [curRouteIndex, setCurRouteIndex] = useState(() =>
		routes.indexOf(pathname)
	);

	// to set the current route as a prev route for the next re-render whenever the route has changed
	useEffect(() => {
		prev.current = pathname;
	}, [pathname]);

	// to listen to scroll event in order to set next/prev route
	useEffect(() => {
		const callback = function (e) {
			// early return to prevent navigation while still animating
			if (isAnimating) return;

			const scrollDirection = e.deltaY > 0 ? "down" : "up";

			const isLastRoute = curRouteIndex === routes.length - 1;
			const isFirstRoute = curRouteIndex === 0;

			const nextRoute = isLastRoute ? routes[0] : routes[curRouteIndex + 1];
			const prevRoute = isFirstRoute
				? routes.at(-1)
				: routes[curRouteIndex - 1];

			if (scrollDirection === "down") {
				navigate(nextRoute);
				setIsAnimating(true);

				if (isLastRoute) return setCurRouteIndex(0);
				setCurRouteIndex((i) => i + 1);
			} else {
				navigate(prevRoute);
				setIsAnimating(true);

				if (isFirstRoute) return setCurRouteIndex(routes.length - 1);
				setCurRouteIndex((i) => i - 1);
			}
		};

		window.addEventListener("wheel", callback);

		return () => {
			window.removeEventListener("wheel", callback);
		};
	}, [isAnimating, curRouteIndex, navigate]);

	return (
		<AnimatedRoutingContext.Provider
			value={{
				isAnimating,
				setIsAnimating,
				prev,
				isRouteChanged,
				pathname,
				setCurRouteIndex,
			}}
		>
			{children}
		</AnimatedRoutingContext.Provider>
	);
}

function useAnimatedRouting() {
	const context = useContext(AnimatedRoutingContext);

	if (context === undefined) {
		throw new Error(`Error in AnimatedRoutingContext`);
	}

	return context;
}

export { AnimatedRoutingProvider, useAnimatedRouting };
