<script>
  import { onMount } from "svelte"; // Importing the 'onMount' function from the 'svelte' library

  // Initializing variables
  let imgs = []; // Array to store image data
  const BASE_URL = `https://api.unsplash.com`; // Base URL for Unsplash API
  let img;
  // Executing code when the component is mounted
  onMount(async () => {
    // Fetching data from the Unsplash API
    const res = await fetch(
      `${BASE_URL}/search/photos?query=bakery&per_page=1&orientation=portrait&client_id=NaEXvicetTERERuXGMiAr0ojC8yUdhMAyUdAQawJkf0`
    );
    let data = await res.json(); // Parsing the response data as JSON
    imgs = data.results[0]; // Extracting the first result from the API response and storing it in the 'imgs' array
    img = imgs.urls.regular; // Extracting the URL of the regular-sized image and storing it in the 'img' variable
  });
</script>

<div class="container">
  <title>Our Story | The Rolling Pin</title>
  <div class="img">
    <img src={img} alt="" />
    <!-- Pulling the images from the unsplash API-->
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

<style>
  .text {
    font-size: 1.25rem;
    color: var(--mainText);
  }
</style>
