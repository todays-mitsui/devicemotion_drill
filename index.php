<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DeviceMotion</title>
<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  height: 100%;
  font-family: sans-serif;
}
main {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}
main > section {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: #ffffff;
}
.x { background: #abd1c6; }
.y { background: #e16162; }
.z { background: #f9bc60; }
.mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
}
</style>
<script defer src="./main.js?v=<?= filemtime(__DIR__ . '/main.js') ?>"></script>
</head>
<body>
<main>
  <section class="x">X</section>
  <section class="y">Y</section>
  <section class="z">Z</section>
  <div class="mask"></div>
</main>
</body>
</html>
