export const flipArray = source => {
	const result = [];
	source.forEach(
		(_, i) =>
			i < source[i].length &&
			result.push(source.reduce((total, current) => [...total, current[i]], []))
	);
	return result;
};
