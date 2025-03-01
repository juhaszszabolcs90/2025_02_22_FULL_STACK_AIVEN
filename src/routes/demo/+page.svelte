<a href="/demo/lucia">lucia</a>

<script>
    let { data } = $props();
    console.log(data);
</script>

<h1>Cica</h1>
<p>{data.user.username}</p>
<p>{data.cica}</p>

<form method="POST">
    <div class="ui input">
        <input type="text" name="cica" />
    </div>
    <button class="ui red button" formaction="cica">Elküld1</button>
    <button class="ui blue button" formaction="kutya">Elküld2</button>
</form>