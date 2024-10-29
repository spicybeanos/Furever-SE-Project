//get the profile data
import { error } from '@sveltejs/kit';
const profile_getter = 'http://127.0.0.1:8080/api/profiles/';


export async function load({ params }) {
    const slug = params.slug;
    if (slug === "")
        return {
            pfp_url: "",
            username: "Could not load profile",
            bio: "Empty slug for username field"
        };
    try {
        const resp = await fetch(profile_getter + slug, {
            headers: { 'Content-Type': 'application/json' },
            method: "GET",
        });
        const body = await resp.json();
        return {
            pfp_url: body.pfp_url,
            username: body.username,
            bio: body.bio
        };
    } catch (exc) {
        return {
            pfp_url: "",
            username: "Error fetching user profile",
            bio: exc
        };
    }

}