const redirect_map = { //NOTE coutries are represented with the ISO 3166-1 alpha-2
	"MA": "https://google.com"
}
const ipinfo_api_key = "";

// document.documentElement.style.display = "none";
// document.body.style.display = "none";

(async () => {
	try {
		const res = await fetch(`https://ipinfo.io/json?token=${ipinfo_api_key}`)
		if (!res.ok) throw new Error("failed to fetch")

		const data = await res.json()
		const {country} = data
		
		// window.location = country in redirect_map ? redirect_map[country] : "./page.html" //NOTE the index/page paradigm

		if (country in redirect_map) {
			window.location.replace(redirect_map[country]) //NOTE the single page (index_page) paradigm
		} else {
			document.documentElement.style.display = "block";
		}
	} catch (err) {
		console.error(err);
	}
})();
