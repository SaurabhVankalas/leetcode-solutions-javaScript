// console.log("hello")

const express = require('express');
const axios = require('axios');

const app = express();
const jokesUrl = 'https://api.chucknorris.io/jokes/random';

app.get('/api/jokes', async (req,res) => {
	try {
		const count = Math.floor(req.query.count) || 1;
		const jokes = [];
		const jokePromises = [];
		for (let i=0;i<count;i++) {
			const joke = getJokes();
			jokePromises.push(joke);
		}
		let promRes = await Promise.all(jokePromises);
		for (let i of promRes) {
			const { id, value } = i.data;
			jokes.push({
				id,
				jokeText: value
			});
		}
		res.send(JSON.stringify(jokes));
	} catch (error) {
		res.send(JSON.stringify("Error while calling jokes"));
	}
})

async function getJokes() {
	// return new Promise((res,rej) => {
	// 	const joke = axios.get(jokesUrl);
	// 	res(joke);
	// })

	return axios.get(jokesUrl);
}

app.listen(3050);


