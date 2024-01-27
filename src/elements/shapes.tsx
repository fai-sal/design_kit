const SHAPES = {
	star: {
		name: 'star',
		title: 'Star',
		icon: '',
		category: 'shapes',
		subCategory: 'Shape',
		size: {
			width: 60,
			height: 60,
		},
		svg: <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" fill="none" viewBox="0 0 50 50"> <path fill="#24A148" d="M22.989.896l7.016 13.34.308.585.65.112 14.815 2.571L35.299 28.32l-.46.476.094.654 2.14 14.928-13.492-6.654-.592-.292-.593.292-13.492 6.654 2.14-14.927.094-.655-.46-.475L.2 17.505l14.815-2.571.65-.113.308-.585L22.989.896z" /></svg >,
	},
	leaf: {
		name: 'leaf',
		title: 'Leaf',
		icon: '',
		category: 'shapes',
		subCategory: 'Shape',
		size: {
			width: 60,
			height: 60,
		},
		svg: <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 50 50"><path fill="#71C285" d="M24.51 23.463c-2.133 2.91-4.408 7.708-3.804 12.307a.652.652 0 00.977.484c.21-.126.442-.272.667-.429a.512.512 0 01.809.373c.094 1.424.422 2.822.97 4.14a.659.659 0 001.114.115 8.147 8.147 0 001.43-2.635.19.19 0 01.373.01c.2 1.08.47 2.147.811 3.193a.689.689 0 001.138.256l.254-.254a.45.45 0 01.723.117 5.552 5.552 0 001.94 1.964 1.502 1.502 0 002.37-1.168v-.074a.435.435 0 01.601-.392c.244.105.538.224.826.313a.579.579 0 00.746-.634 9.292 9.292 0 00-.965-2.928.298.298 0 01.356-.43c.544.196 1.11.327 1.684.391a.306.306 0 00.318-.415 29.701 29.701 0 00-2.772-5.402.386.386 0 01.49-.57 49.52 49.52 0 005.189 2.377.507.507 0 00.633-.67 11.328 11.328 0 00-.658-1.376.59.59 0 01.242-.844c.057-.026.115-.056.175-.09a.68.68 0 00.177-1.02 8.862 8.862 0 00-2.173-1.909.338.338 0 01.116-.626c.375-.05.744-.14 1.1-.268a.57.57 0 00.201-.909c-1.272-1.464-5.26-5.458-10.745-5.458h-.42a6.06 6.06 0 00-4.893 2.461z" /><path fill="#4C8056" d="M30.488 38.208a.746.746 0 01-.618-.423c-2.037-4.3-3.847-11.275-3.004-16.432a.746.746 0 111.472.24c-.756 4.624.877 11.326 2.88 15.553a.746.746 0 01-.73 1.062z" /><path fill="#4C8056" d="M35.792 29.206a.73.73 0 01-.277-.053c-3.251-1.3-7.139-4.777-8.318-7.438a.746.746 0 111.364-.605c.91 2.054 4.388 5.41 7.508 6.658a.745.745 0 01-.277 1.438z" /><path fill="#71C285" d="M25.35 18.019c-1.63.722-4.8 6.787-8.056 10.04a.722.722 0 01-1.075-.075l-.013-.02a.92.92 0 00-1.257-.202 9.672 9.672 0 01-2.96 1.413.82.82 0 01-1.068-.936 6.938 6.938 0 01.97-1.917c.169-.239-.146-.514-.403-.35a32.129 32.129 0 01-3.854 2.144.73.73 0 01-1.07-.717 7.31 7.31 0 01.242-.845.463.463 0 00-.648-.537 10.255 10.255 0 01-5.392.667.85.85 0 01-.61-1.336 9.31 9.31 0 012.364-2.266.872.872 0 00.186-1.409 5.78 5.78 0 01-.95-1.185 1.04 1.04 0 01.644-1.524c1.676-.566 5.204-1.418 10.808-1.174.17.007.215-.208.048-.242-2.078-.42-5.505-1.136-7.597-1.669a.515.515 0 01-.258-.895l.543-.48a.322.322 0 00-.163-.56 18.483 18.483 0 01-3.096-1.016.389.389 0 01.02-.722 4.565 4.565 0 011.566-.386.248.248 0 00.22-.363l-.25-.444a.49.49 0 01.535-.689 9.04 9.04 0 011.434.23.504.504 0 00.646-.612l-.18-.48a.513.513 0 01.597-.646c1.563.194 3.083.648 4.497 1.343.269.132.557-.14.381-.362a7.722 7.722 0 01-1.163-1.965.802.802 0 011.099-.952 22.273 22.273 0 017.235 4.155 40.072 40.072 0 016.027 6.984zm4.89-2.248a6.816 6.816 0 01-6.398-3.692l-.011-.022c-1.465-2.928-3.635-3.72-4.444-7.224a.174.174 0 01.224-.204l.925.308a.41.41 0 00.492-.582 10.408 10.408 0 01-.72-1.615.596.596 0 01.897-.684c.104.075.215.157.332.253a.611.611 0 00.97-.299c.144-.474.358-.924.637-1.333a1.206 1.206 0 012.125.253 58.26 58.26 0 012.05 6.944.24.24 0 00.468 0c.339-1.69 1.16-4.856 2.87-7.074a.653.653 0 011.145.243 8.78 8.78 0 01.26 1.712.246.246 0 00.46.102A8.299 8.299 0 0134.375.57a.648.648 0 011.062.535 2.44 2.44 0 01-.075.495.182.182 0 00.29.189A8.184 8.184 0 0138.678.136a.682.682 0 01.836.783 5.45 5.45 0 01-1.41 2.861h.5a.615.615 0 01.462 1.022c-.49.554-.963 1.235-3.216 1.235l2.056.753c.373 0 .634.544.299.709-1.17.58-2.44 1.934-4.094 2.628a.272.272 0 00.081.522c.592.047 1.18.124 1.764.232a1.16 1.16 0 01.761 1.766c-.423.65-1.095.842-2.124.895a.432.432 0 00-.282.736.625.625 0 01-.31 1.054c-1.242.237-2.5.384-3.763.438z" /><path fill="#4C8056" d="M14.162 22.493a.746.746 0 01-.385-1.385c3.796-2.278 11.113-3.76 11.426-3.821a.716.716 0 01.146-.015h5.221a.746.746 0 010 1.491h-5.146c-.764.158-7.494 1.592-10.88 3.623a.74.74 0 01-.383.107z" /><path fill="#4C8056" d="M27.587 22.23a.747.747 0 01-.657-1.099 8.976 8.976 0 012.482-2.95 4.434 4.434 0 01-1.735-2.298.746.746 0 011.401-.512c.672 1.839 2.053 1.9 2.112 1.9a.75.75 0 01.722.637.741.741 0 01-.496.817 6.479 6.479 0 00-3.172 3.113.745.745 0 01-.657.392z" /><path fill="#4C8056" d="M36.538 18.764h-5.967a.745.745 0 110-1.492h5.967c5.11 0 6-1.71 6.006-1.728a.747.747 0 011.417.472c-.096.281-1.1 2.748-7.423 2.748zm-8.151-2.424a.746.746 0 01-.747-.746c0-.133.019-.326.043-.565.11-1.056.318-3.023-1.202-4.036a.746.746 0 11.827-1.241 4.086 4.086 0 011.588 1.994 17.601 17.601 0 013.438-5.63.746.746 0 011.054 1.055c-2.8 2.8-4.264 8.546-4.279 8.604a.746.746 0 01-.723.564zm-3.037 2.426a.756.756 0 01-.215-.031c-.308-.093-7.591-2.291-11.358-4.55a.746.746 0 01.768-1.279c3.606 2.163 10.945 4.379 11.018 4.401a.746.746 0 01-.214 1.459z" /></svg >,

	},
	oval: {
		name: 'oval',
		title: 'Oval',
		icon: '',
		category: 'shapes',
		subCategory: 'Shape',
		size: {
			width: 100,
			height: 100,
		},
		svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50"><path fill="#B6BBCD" d="m25 0 17.678 7.322L50 25l-7.322 17.678L25 50 7.322 42.678 0 25 7.322 7.322 25 0Z" /></svg>

	},
	line: {
		name: 'line',
		title: 'Water Mark',
		icon: '',
		category: 'shapes',
		subCategory: 'Shape',
		size: {
			width: 200,
			height: 35,
		},
		svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 250 33" preserveAspectRatio="none"><path fill="#B6BBCD" d="M98.966 23.902L86.927 16.16l12.04-7.894 13.235 7.83-13.236 7.806zm-9.6-7.742l9.622 6.198 10.602-6.263-10.602-6.263-9.623 6.328z"></path><path fill="#B6BBCD" d="M108.589 23.902l-12.04-7.742 12.04-7.894 13.236 7.83-13.236 7.806zm-9.601-7.742l9.622 6.198 10.602-6.263-10.602-6.263-9.622 6.328zM140.612 23.902l-12.039-7.742 12.039-7.894 13.236 7.83-13.236 7.806zm-9.601-7.742l9.623 6.198 10.602-6.263-10.602-6.263-9.623 6.328z"></path><path fill="#B6BBCD" d="M150.213 23.902l-12.039-7.742 12.039-7.894 13.236 7.83-13.236 7.806zm-9.579-7.742l9.622 6.198 10.602-6.263-10.602-6.263-9.622 6.328z"></path><path fill="#B6BBCD" d="M239.861 16.638h-78.524c-.392 0-.697-.283-.697-.653 0-.348.305-.652.697-.652h78.524c.392 0 .697.283.697.652.022.37-.305.653-.697.653zM88.756 16.638H10.23c-.392 0-.696-.283-.696-.653 0-.348.304-.652.696-.652h78.525c.391 0 .696.283.696.652 0 .37-.305.653-.696.653z"></path><path fill="#B6BBCD" d="M236.53 16.026c2.199.022 6.096 3.915 6.096 3.915s2.743-3.958 6.705-3.958c-3.962 0-6.705-3.958-6.705-3.958s-3.897 3.98-6.096 4.001zM13.65 15.94c-2.2-.022-6.096-3.915-6.096-3.915S4.81 15.983.849 15.983c3.962 0 6.705 3.958 6.705 3.958s3.897-3.958 6.095-4.002zM125.155 23.378l-8.447-12.244L125.068 0l8.534 11.134-8.447 12.244zm-6.77-12.222l6.77 9.808 6.771-9.808-6.836-8.916-6.705 8.916z"></path><path fill="#B6BBCD" d="M125.155 32.271l-8.447-12.243 8.36-11.135 8.534 11.135-8.447 12.243zm-6.77-12.222l6.77 9.808 6.771-9.808-6.836-8.916-6.705 8.916z"></path></svg>
	},
};

export { SHAPES };
export default Object.keys(SHAPES);
