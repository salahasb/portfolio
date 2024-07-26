import { useLocation, useNavigate } from "react-router-dom";
import { useAnimatedRouting } from "../contexts/AnimatedRoutingContext";
import { routes } from "../../../utils/constants";

function useAnimatedNavigate() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { setIsAnimating, setCurRouteIndex } = useAnimatedRouting();

	function handleNavigate(path) {
		if (pathname === path) return;

		setIsAnimating(true);
		setCurRouteIndex(routes.indexOf(path));

		navigate(path);
	}

	return handleNavigate;
}

export default useAnimatedNavigate;
