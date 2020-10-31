<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <title>Data migration</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="${assetsUrl}/styles/data-migrate.css">
</head>
<body>
    <header class="appbar">
        <div class="home-button app-icon system-info-button">
            <span class="app-name">Data migrate</span>
        </div>
    </header>

    <main class="container mx-auto grid grid-cols-12">
        <div class="panel col-span-4" id="editor">


        </div>
        <div class="panel col-span-8" id="result">
            <h2>JSON:</h2>
        </div>
    </main>

    <footer></footer>

    <script src="${assetsUrl}/js/data-migrate.js" type="module"></script>
</body>
</html>
