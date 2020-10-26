<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin tool starter</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.1/codemirror.min.js" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="${assetsUrl}/styles/data-migrate.css">
</head>
<body>
    <header class="appbar">
        <div class="home-button app-icon system-info-button">
            <span class="app-name">Data migrate</span>
        </div>
    </header>
    <main class="container mx-auto grid grid-cols-6">
        <div class="panel" id="editor">
            <h2>Editor:</h2>
            <div id="editorjs" class="editor-tool"></div>
        </div>
        <div class="panel" id="result">
            <h2>JSON:</h2>
        </div>
    </main>
    <footer>

    </footer>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.1/codemirror.min.js"></script>
    <script src="${assetsUrl}/js/data-migrate.js" type="module"></script>

</body>
</html>
