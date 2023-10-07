<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Ler</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css">
    <link rel="stylesheet" href="./styles/globals.css" />
  </head>
  <body>
    <div id="header"></div>
    <div id="app"></div>


    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <?php 
      $variable = implode("", file("data/file.txt"));
    ?>

    <script type="text/jsx" src="./pages/read.jsx" ></script>

    <script type="text/javascript">
      const data = "<?php echo str_replace("\n", "/", $variable); ?>";
    </script>

    <script type="text/jsx">
    const app = document.getElementById("app");

    const Show = () => {
      const arr = data.split("/");
      console.log(arr);
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="container p-48 rounded-lg bg-opacity-60">
            {arr.map((n) => (
              <p>{n}</p>
            ))}
          </div>
        </div>
      );
    };

    ReactDOM.render(<Show />, app);
    </script>
  </body>
</html>