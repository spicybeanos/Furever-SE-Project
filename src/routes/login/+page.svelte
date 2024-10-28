<script>
    export let data;
    export let form;
</script>

<h1>Log in</h1>
<form method="POST" action="?/login">
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
    <button formaction="?/register">Register</button>

    {#if form?.success}
        <p>Logged in succesfully!</p>
    {/if}
</form>

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
