<script>
  import { onMount } from "svelte";

  let imgs = [];
  const BASE_URL = `https://api.unsplash.com`;
  let img;
  onMount(async () => {
    const res = await fetch(
      `${BASE_URL}/search/photos?query=bakery&per_page=1&orientation=portrait&client_id=NaEXvicetTERERuXGMiAr0ojC8yUdhMAyUdAQawJkf0`
    );
    let data = await res.json();
    imgs = data.results[0];
    img = imgs.urls.regular;
  });
</script>

<div class="container">
  <title>Our Story | The Rolling Pin</title>
  <div class="img">
    <img src={img} alt="" />
  </div>
  <div class="text">
    <p>
      As a family, we believe that baking is not just an art, but a way to bring
      joy and comfort to our community. Our journey started with Ann Goomes, who
      had a vision of creating a warm and inviting space where families could
      come together to enjoy freshly baked goodies. Today, that vision lives on
      as we continue to craft each confection with the same dedication and care
      that started it all.
    </p>
  </div>
</div>

<div class="container">
  <div class="text">
    <p>
      At The Rolling Pin Bakery, we take pride in using only the finest, locally
      sourced ingredients. Our recipes are cherished family secrets, passed down
      from one generation to the next. From delectable pastries and cakes to
      mouthwatering cookies and bread, every bite is a testament to our
      commitment to quality.
    </p>
  </div>
  <div class="img">
    <img src={img} alt="" />
  </div>
</div>

<!-- <div class="aboutPics">
  {#each imgs as img}
    <img src={img.urls.regular} alt="aboutUsPics" />
  {/each}
</div> -->
