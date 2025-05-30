<script>
  export let width = 400;
  export let height = 400;
  export let color1 = '#a259ff';
  export let color2 = '#43caf0';
  export let top = '10%';
  export let left = '5%';
  export let delay = '0s';
</script>

<div
  class="blob"
  style="
    width: {width}px;
    height: {height}px;
    top: {top};
    left: {left};
    background: radial-gradient(circle at 50% 50%, {color1} 0%, {color2} 100%);
    animation-delay: {delay};
  "
></div>

<style>
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
  animation: blobMove 18s infinite alternate ease-in-out;
}
@keyframes blobMove {
  0% { transform: scale(1) translateY(0);}
  100% { transform: scale(1.1) translateY(-40px);}
}
</style> 