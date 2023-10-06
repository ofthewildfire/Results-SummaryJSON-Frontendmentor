const summaryContainer = document.querySelector(".results_panel")

const populateHTML = (arr) => {
	return arr
		.map((item) => {
			return `<section class="res_summary ${item.category.toLowerCase()}">
      <div class="type">
        <img src="${item.icon}" alt="Result ${item.category} image">
        <p> ${item.category} </p>
      </div>
      <p class="res_text">
        <span>${item.score}</span> / 100
      </p>
    </section>`
		})
		.join("")
}

const fetchData = () => {
	try {
		fetch(`./data.json`)
			.then((res) => res.json())
			.then((data) => {
				summaryContainer.innerHTML += populateHTML(data)
			})
	} catch (error) {
		console.log(error)
	}
}

fetchData()
