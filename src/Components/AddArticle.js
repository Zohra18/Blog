import React from "react"

const AddArticle = () => {
	return (
		<div>
			<form method="POST" action="http://localhost:4545/blog/articles/" encType="multipart/form-data">
				<input type="text" name="title" placeholder="Write your title here" required></input>
				<input type="text" name="text" placeholder="Write your text here" required></input>
				<button type="submit">Ajouter</button>
			</form>
		</div>
	)
}

export default AddArticle
