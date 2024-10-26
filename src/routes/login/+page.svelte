<script>
    let user = "";
    let pass = "";
</script>
<h1>Log in</h1>
<form >
    <input class="text" type="text" id="user" bind:value={user} placeholder="username"/>
    <input class="text" type="password" id="pass" bind:value={pass} placeholder="password"/>
    <input type="submit" />
</form>
<style>
    .text{
        border-radius: 5px;
        padding: 5px 5px 5px 5px;
        
    }
</style>