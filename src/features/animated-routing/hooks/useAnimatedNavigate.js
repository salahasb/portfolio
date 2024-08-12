import { useAnimatedRouting } from "../contexts/AnimatedRoutingContext";
import { routes } from "../../../utils/constants";

function useAnimatedNavigate() {
	const { setIsAnimating, pathname, navigate, setCurRouteIndex } =
		useAnimatedRouting();

	function handleNavigate(path) {
		if (pathname === path) return;

		setIsAnimating(true);
		setCurRouteIndex(routes.findIndex((route) => route.path === path));

		navigate(path);
	}

	return handleNavigate;
}

export default useAnimatedNavigate;
