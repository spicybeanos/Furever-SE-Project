<script>
    export let data;
</script>

<h1>Profile</h1>
<div class="col">
    <img src={data.pfp_url} alt="pfp" height="256" width="256" />
    <div>
        <h1>{data.username}</h1>
        <p>{data.bio}</p>
    </div>
</div>

<style>
    img {
        border-radius: 50%;
        margin: 20px 20px 20px 20px;
    }
    .col {
        display: flex;
        justify-content: left;
    }
</style>
