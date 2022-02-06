{
  const xUnit = document.querySelector('.x');
  const yUnit = document.querySelector('.y');
  const zUnit = document.querySelector('.z');

  console.info({ DeviceOrientationEvent });
  console.info({ DeviceMotionEvent });

  function lowPass() {
    const k = 0.05;
    let prev = 0;

    return (val) => {
      prev = (1 - k) * prev + k * val;
      return prev;
    };
  }

  async function requestPermission() {
    if (!('requestPermission' in DeviceMotionEvent)) { return true; }

    const permissionState = await DeviceMotionEvent.requestPermission();
    return permissionState == 'granted';
  }

  const xFilter = lowPass();
  const yFilter = lowPass();
  const zFilter = lowPass();

  const main = event => {
    // console.info(event);
    let { x, y, z } = event.accelerationIncludingGravity;

    x = xFilter(x);
    y = yFilter(y);
    z = zFilter(z);

    console.info({ x: Number(x).toFixed(2), y: Number(y).toFixed(2), z: Number(z).toFixed(2) });

    xUnit.innerText = (x >= 0 ? '+' : '') + Number(x).toFixed(2);
    yUnit.innerText = (y >= 0 ? '+' : '') + Number(y).toFixed(2);
    zUnit.innerText = (z >= 0 ? '+' : '') + Number(z).toFixed(2);
  }

  const mask = document.querySelector('.mask');
  mask.addEventListener('click', async (event) => {
    const state = await requestPermission();
    console.info({ state });

    window.addEventListener('devicemotion', main);

    mask.remove();
  });
}
