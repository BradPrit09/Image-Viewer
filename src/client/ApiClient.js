const axios = require('axios');
axios.defaults.baseURL = 'https://api.instagram.com/v1';

function ApiClient() {}

ApiClient.prototype.getMdeia = () => {
	const accessToken = sessionStorage.getItem('access-token');
	return axios.get(`/users/self/media/recent?access_token=${accessToken}`, {}, {
			headers: {
				"Accept": "application/json",
				"content-type": "application/json"
			}
		})
		.then(response => {
			console.log(" response ", response.data);
			return response && response.data;
		}).catch((error) => {
			throw error;
		});
}


export default ApiClient;