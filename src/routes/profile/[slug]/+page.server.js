//get the profile data
import { error } from '@sveltejs/kit';

export function load({params}) {
    const slug = params.slug;

    return {
        pfp_url:"example/example_pfp.jpg",
        username:"cat_lover_8008135 slug:"+slug,
        bio:"i love cats and send posts about cats"
    };
}