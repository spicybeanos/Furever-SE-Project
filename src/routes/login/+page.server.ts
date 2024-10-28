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
				const _err = await resp.json();
				return { success: false, error: "Failed to log in! Username or password incorrect!"+_err.error };
			}
			const data = await resp.json();
			return {success:true,msg:"Login success!" + data.UUID,id:data.UUID,user:data.username}
		}
		catch (exc) {
			return { success: false, error: "Could not connect to auth server!" }
		}
	},
	register: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');
		try {
			const resp = await fetch(login_server_address, {
				headers: { 'Content-Type': 'application/json' },
				method: "POST",
				body: JSON.stringify({
					action: "register",
					user: username,
					pass: password
				})
			})

			const body = await resp.json()
			if(resp.ok === false){
				return {success:false,error:"Registering failed!:"+resp.status+":"+body.error}
			}
			const data = await resp.json()
			if(resp.status === 200)
				return {success:true,msg:"Registered successfully!"+data.UUID,id:data.UUID,user:data.username}
		}
		catch(exc){
			console.log("could not connect to auth server!!\n" + exc);
			return { success: false, error: "Could not connect to auth server!" }
		}

		return { success: false, error: "you should not see this!" }
	}
} satisfies Actions;