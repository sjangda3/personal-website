<script>
  import Blob from './Blob.svelte';
</script>

<div class="blobs-bg">
  <Blob width={160} height={160} color1="#7f5af0" color2="#3a86ff" top="5vh" left="8vw" delay="0s" />
  <Blob width={110} height={110} color1="#6246ea" color2="#a259ff" top="20vh" left="60vw" delay="1s" />
  <Blob width={120} height={120} color1="#5f0a87" color2="#3a86ff" top="35vh" left="30vw" delay="2s" />
  <Blob width={140} height={140} color1="#3a86ff" color2="#7f5af0" top="50vh" left="70vw" delay="3s" />
  <Blob width={100} height={100} color1="#a259ff" color2="#6246ea" top="65vh" left="20vw" delay="4s" />
  <Blob width={130} height={130} color1="#e81cff" color2="#43caf0" top="80vh" left="80vw" delay="5s" />
  <Blob width={110} height={110} color1="#00f2fe" color2="#4facfe" top="100vh" left="10vw" delay="6s" />
  <Blob width={120} height={120} color1="#f72585" color2="#7209b7" top="120vh" left="50vw" delay="7s" />
  <Blob width={140} height={140} color1="#4361ee" color2="#b5179e" top="140vh" left="75vw" delay="8s" />
  <Blob width={100} height={100} color1="#3a86ff" color2="#8338ec" top="160vh" left="35vw" delay="9s" />
  <Blob width={120} height={120} color1="#7209b7" color2="#f72585" top="180vh" left="60vw" delay="10s" />
  <Blob width={110} height={110} color1="#00f2fe" color2="#a259ff" top="200vh" left="15vw" delay="11s" />
  <Blob width={130} height={130} color1="#b5179e" color2="#43caf0" top="220vh" left="80vw" delay="12s" />
  <Blob width={100} height={100} color1="#8338ec" color2="#3a86ff" top="240vh" left="40vw" delay="13s" />
  <Blob width={120} height={120} color1="#f72585" color2="#7209b7" top="260vh" left="60vw" delay="14s" />
</div>

<style>
.blobs-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 300vh;
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
  0% { filter: blur(80px) brightness(1); }
  100% { filter: blur(100px) brightness(1.15); }
}
</style> 