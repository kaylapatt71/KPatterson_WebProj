<body>
  <!-- Navbar -->
  <header>
    <nav>
      <ul>
        <a style="text-decoration:none" href="/"> Home </a>
        <a style="text-decoration:none" href="/about"> Our story </a>
        <a style="text-decoration:none" href="/productGallery"> Gallery </a>
        <a style="text-decoration:none" href="/contact"> Contact us </a>
      </ul>
    </nav>
  </header>
</body>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  nav {
    width: 100%;
    background-color: var(--pink);
    padding: 2rem; /* Reduced padding for smaller screens */
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  }

  nav a {
    padding: 0.5rem 1rem; /* Adjust padding for smaller screens */
    font-size: 1.25rem; /* Adjust font size for smaller screens */
    text-decoration: none;
    color: var(--mainText);
    font-family: "Montserrat", sans-serif;
    white-space: nowrap; /* Prevent text from wrapping */
    margin: 0.5rem; /* Add some spacing between links */
  }

  nav a:hover {
    color: var(--white);
  }

  
</style>
