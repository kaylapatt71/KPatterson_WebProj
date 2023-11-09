<script>
  import { enhance, applyAction } from "$app/forms"; // Importing 'enhance' and 'applyAction' functions from '$app/forms'
  export let form; // Exporting a variable named 'form'
</script>

<link rel="stylesheet" href="css\contact.css" />
<!-- Linking the contact CSS-->

<div class="container">
  <title>Contact Us | The Rolling Pin</title>
  <h3>Contact Form</h3>
  {#if form?.success}
    <!-- Display a success message if the form submission was successful -->
    <p class="success">{form?.status || ""}</p>
  {:else}
    <!-- Render a form with a POST method -->
    <form
      method="POST"
      use:enhance={() => {
        return async ({ result }) => {
          await applyAction(result);
        };
      }}
    >
      <label for="first_name">First Name</label>
      <!-- Label for the 'first_name' input -->
      <!-- Input field for entering the first name -->
      <input
        id="first_name"
        name="first_name"
        type="text"
        placeholder="Jane"
        value={form?.first_name || ""}
        class:error={form?.errors?.first_name}
      />
      {#if form?.errors?.first_name}
        <p>{form?.errors?.first_name}</p>
      {/if}

      <label for="last_name">Last Name</label>
      <!-- Label for the 'last_name' input -->
      <!-- Input field for entering the last name -->
      <input
        id="last_name"
        name="last_name"
        type="text"
        placeholder="Doe"
        value={form?.last_name || ""}
        class:error={form?.errors?.last_name}
      />
      {#if form?.errors?.last_name}
        <p>{form?.errors?.last_name}</p>
      {/if}

      <label for="email">Email</label>
      <!-- Label for the 'email' input -->
      <!-- Input field for entering the email -->
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@domain.com"
        value={form?.email || ""}
        class:error={form?.errors?.email}
      />
      {#if form?.errors?.email}
        <p>{form?.errors?.email}</p>
      {/if}

      <label for="message">Message</label><br />
      <!-- Label for the 'message' input -->

      <textarea
        id="message"
        name="message"
        cols="30"
        rows="10"
        placeholder="Enter your message here ..."
      />
      {#if form?.errors?.message}
        <p>{form?.errors?.message}</p>
      {/if}
      <div class="center">
        <input type="submit" value="Submit" />
      </div>
    </form>
  {/if}
</div>
