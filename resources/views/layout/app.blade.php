<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TrueKind</title>
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Carter+One&family=Nunito+Sans:wght@400;700&display=swap" rel="stylesheet" />
    </head>

<body id="top">

    <header>
        
        <x-navbar/>

    </header>

    {{-- CONTENIDO --}}

    @yield('content')


    <footer>

        <x-footer/>

    </footer>

    {{-- SCRIPTS --}}

    <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>

    <script src="https://unpkg.com/i18next/dist/umd/i18next.min.js"></script>
    <script src="https://unpkg.com/i18next-browser-languageDetector/dist/umd/i18nextBrowserLanguageDetector.min.js"></script>

    <script src="{{ asset('js/pagina.js') }}"></script> 
    <script src="{{ asset('js/favorites.js') }}" defer></script>
    <script src="{{ asset('js/main.js') }}" defer></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" defer></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" defer></script>
    <script src="{{ asset('js/wow.min.js') }}" ></script>
    <script>
        new WOW().init();
    </script>
    <script src="https://kit.fontawesome.com/aea951a809.js"></script>

</body>

</html>
