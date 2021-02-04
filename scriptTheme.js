function theme() {
	const toggleThemeYellow = document.querySelector('.ThemeY')
	console.log(toggleThemeYellow)

	toggleThemeYellow.addEventListener('click', () => {
		
		document.documentElement.setAttribute('data-theme', 'yellow')
	})

	const toggleThemeBlue = document.querySelector('.ThemeB')
	console.log(toggleThemeBlue)

	toggleThemeBlue.addEventListener('click', () => {
		
		document.documentElement.setAttribute('data-theme', 'blue')
	})

	const toggleThemeGreen = document.querySelector('.ThemeG')
	console.log(toggleThemeGreen)

	toggleThemeGreen.addEventListener('click', () => {
		
		document.documentElement.setAttribute('data-theme', 'green')
	})

	const toggleThemeBlueGreen = document.querySelector('.ThemeBG')
	console.log(toggleThemeBlueGreen)

	toggleThemeBlueGreen.addEventListener('click', () => {
		
		document.documentElement.setAttribute('data-theme', 'blgr')
	})
}

theme()