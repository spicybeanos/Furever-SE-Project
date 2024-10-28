<script>
    export let form;
    import { goto } from "$app/navigation";

    function onFormCompleted() {
        document.cookie = `uuid=${form?.id};path=/`;
        //goto("/");
        return "";
    }
</script>

{#if !form?.success}
<form method="POST" action="?/login">
    <h1>Log in</h1>
    <input
        class="text"
        type="text"
        name="username"
        id="user"
        placeholder="username"
    />
    <input
        class="text"
        type="password"
        name="password"
        id="pass"
        placeholder="password"
    />
    <button>Log in</button>
</form>
<form method="POST" action="?/register">
    <h1>Register</h1>
    <input
        class="text"
        type="text"
        name="username"
        id="user"
        placeholder="username"
    />
    <input
        class="text"
        type="password"
        name="password"
        id="pass"
        placeholder="password"
    />
    <button>Register</button>
</form>
{/if}
{#if form?.success}
    <p>Success:{form?.msg}</p>
    <div>Go to home page</div>
{/if}

<style>
    .text {
        background-color: var(--background-950);
        color: white;
        border: solid;
        border-radius: 7px;
        border-right: 1px;
        border-top: 1px;
        border-color: var(--primary-400);
        padding: 5px 5px 5px 5px;
        margin: 5px 5px 5px 5px;
    }
    button {
        background-color: var(--primary-500);
        border: none;
        border-radius: 5px;
        padding: 5px 5px 5px 5px;
    }
</style>
