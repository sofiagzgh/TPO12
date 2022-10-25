var docentes = document.querySelector("#docentes");
function traer(){
	fetch("https://randomuser.me/api/")
	.then(res => res.json())
	.then (data => {
		console.log(data.results[0].name.first)
		console.log(data.results[0].name.last)
		
	
		docentes.innerHTML = 
			`<div>
				<h4>Nuestr@s Docentes</h4>
				<img src="${data.results[0].picture.large}" width="100px">
				<p>${data.results[0].name.first}</p>
                <p>${data.results[0].name.last}</p>

			</div>
			`
	})
	.catch(err => console.error(err));
}
traer();
