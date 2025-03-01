<a href="/demo/lucia">lucia</a>

<script>
    let { data } = $props();
</script>

<h1>Cica</h1>
<p>{data.user?.username}</p>
<p>{data.cica}</p>

<form method="POST">
    <div class="ui input">
        <input type="text" name="cica" />
    </div>
    <button class="ui red button" formaction="?/cica">Elküld1</button>
    <button class="ui blue button" formaction="?/kutya">Elküld2</button>
</form>

<div class="ui divider"></div>
<button class="ui red small button"
    onclick={ async () => {
        const data = await fetch('/server', {
            method: 'POST',
            body: JSON.stringify({ x: 1, y: 3 }) })
        .then(res => res.json())
        console.log(data)

    }}
    >POST</button>