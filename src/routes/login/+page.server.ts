import { resolveConfig } from 'vite';
import type { Actions } from './$types';

const login_server_address = "127.0.0.1:5060/login";

export const actions = {
	login: async (event) => {
		// TODO log the user in
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');

		try {
			const resp = await event.fetch(login_server_address, {
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
				method: "POST",
				body: JSON.stringify({
					action: "login",
					user: username,
					pass: password
				})
			});
			if (!resp.ok) {
				return { success: false, error: "Failed to log in! Username or password incorrect!" };
			}
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