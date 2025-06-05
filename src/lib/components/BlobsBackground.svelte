<script>
  import Blob from './Blob.svelte';
  import { onMount } from 'svelte';

  const palette = [
    "#7f5af0", "#3a86ff", "#e81cff", "#43caf0", "#f72585",
    "#7209b7", "#b5179e", "#00f2fe", "#4facfe", "#8338ec",
    "#2ec4b6", "#ffbe0b", "#ff006e", "#9d4edd", "#4361ee"
  ];

  function randomColor() {
    return palette[Math.floor(Math.random() * palette.length)];
  }

  function randomBetween(a, b) {
    return Math.random() * (b - a) + a;
  }

  // create blobs randomly distributed throughout the page
  let blobs = [];
  for (let i = 0; i < 15; i++) {
    blobs.push({
      id: i,
      width: randomBetween(80, 180),
      height: randomBetween(80, 180),
      color1: randomColor(),
      color2: randomColor(),
      x: randomBetween(0, 90),
      y: randomBetween(0, 200),
      vx: randomBetween(-0.08, 0.08),
      vy: randomBetween(-0.08, 0.08)
    });
  }

  function animate() {
    blobs = blobs.map(blob => {
      let { x, y, vx, vy, width, height } = blob;
      x += vx;
      y += vy;
      // bounce off walls
      const maxX = 100 - (width / window.innerWidth * 100);
      const maxY = 200 - (height / window.innerHeight * 100);
      if (x < 0) { x = 0; vx *= -1; }
      if (x > maxX) { x = maxX; vx *= -1; }
      if (y < 0) { y = 0; vy *= -1; }
      if (y > maxY) { y = maxY; vy *= -1; }
      return { ...blob, x, y, vx, vy };
    });
    requestAnimationFrame(animate);
  }

  onMount(() => {
    animate();
  });
</script>

<div class="blobs-bg">
  {#each blobs as blob (blob.id)}
    <Blob
      width={blob.width}
      height={blob.height}
      color1={blob.color1}
      color2={blob.color2}
      top={blob.y + 'vh'}
      left={blob.x + 'vw'}
      delay="0s"
    />
  {/each}
</div>

<style>
.blobs-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 200vh;
  pointer-events: none;
  z-index: 0;
}
:global(.blob) {
  animation: blobMove 18s infinite alternate ease-in-out, blobPulse 8s infinite alternate ease-in-out;
}
@keyframes blobMove {
  0% { transform: scale(1) translateY(0);}
  100% { transform: scale(1.1) translateY(-40px);}
}
@keyframes blobPulse {
  0% { filter: blur(80px) brightness(2); }
  100% { filter: blur(100px) brightness(1.15); }
}
</style> 