@extends("layouts.layout")
@section("title", "Welcome")
@section("content")
<main>
    <div id="firstContentMainPage">
        <h1>Aranyhaj</h1>
        <p></p>
        <button>Adományozok</button>
    </div>

    <div id="SecoundContentMainPage">
        <div>
            <img src=" alt="event">
            <button><a href="events.blade.php"">Események</a></button>
        </div>
        <div>
            <img src="" alt="donation">
            <button><a href="donate.blade.php">Adományozok</a><</button>
        </div>
        <div>
            <img src="" alt="event">
            <button><a href="salons.blade.php">Szalonok</a></button>
        </div>

    </div>
</main>
@endsection