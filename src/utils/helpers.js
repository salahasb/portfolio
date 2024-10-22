export const handleOnAnimationEnd = (e, setIsAnimating) => {
	e.animationName === "fadeOut" ? setIsAnimating(false) : "";
};
