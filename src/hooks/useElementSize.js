import { useState, useEffect } from "react";

export const useElementSize = ref => {
	const [width, setWidth] = useState(null);
	const [height, setHeight] = useState(null);

	useEffect(() => {
		const resizeCallback = () => {
			if (ref.current) {
				const elt = ref.current.getBoundingClientRect();

				setWidth(elt.width);
				setHeight(elt.height);
			}
		};
		window.addEventListener("resize", resizeCallback);

		return () => window.removeEventListener("resize", resizeCallback);
	}, [ref, width, height]);

	return { width, height };
};
