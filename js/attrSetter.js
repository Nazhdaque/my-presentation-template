export class AttrSetter {
	initWith = (attr, data) => {
		for (const key in data)
			document
				.querySelectorAll(`${key}`)
				.forEach(el => el.setAttribute(`${attr}`, `${data[key]}`));
	};
}
