<!DOCTYPE html>
<html lang="en-hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{url ('CSS/style.css')}}">
    <title>@yield("title")</title>
</head>
<body>
    <header>
        <img src="" alt="ImALogo">
        <h1>Aranyhaj</h1>
        <a href="https://hengersor.hu/"><p>Facebook</p></a><i class="fa-brands fa-facebook"></i>
        <a href="https://hengersor.hu/"><p>Instagram</p></a><i class="fa-brands fa-instagram"></i>
        <a href="https://hengersor.hu/"><p>TikTok</p></a><i class="fa-brands fa-tiktok"></i>
        <div class="dropdown">
            <span>K</span>
            <div id="myDropown" class="dropdown-content">
                <a href="/user">Fiók</a>
                <a href="/event">Események</a>
                <a href="/donate">Adományozok</a>
                <a href="/about">Rólunk</a>
            </div>
        </div>
    </header>
