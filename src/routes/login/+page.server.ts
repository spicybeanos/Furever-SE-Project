import { resolveConfig } from 'vite';
import type { Actions } from './$types';

const login_server_address = "http://localhost:3000/login";

export const actions = {
	login: async (event) => {
		// TODO log the user in
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');

		try {
			const resp = await fetch(login_server_address, {
				headers: { 'Content-Type': 'application/json' },
				method: "POST",
				body: JSON.stringify({
					action: "login",
					user: username,
					pass: password
				})
			});
			if (!resp.ok) {
				console.log("reponse not ok:"+resp.status)
				return { success: false, error: "Failed to log in! Username or password incorrect!" };
			}
			console.log("response ok");
			const data = await resp.json();
			console.log("got fetch response:\n" + data);
		}
		catch (exc) {
			console.log("could not connect to auth server!!\n"+exc);
			return { success: false, error: "Could not connect to auth server!" }
		}
	},
	register: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');

		const resp = await fetch(login_server_address, {
			method: "POST",
			body: JSON.stringify({
				action: "register",
				user: username,
				pass: password
			})
		})
	}
} satisfies Actions;