<script>
  import { enhance, applyAction } from "$app/forms";
  export let form;
</script>

<link rel="stylesheet" href="css\contact.css" />

<div class="container">
  <h3>Contact Form</h3>
  {#if form?.success}
    <p class="success">{form?.status || ""}</p>
  {:else}
    <form
      method="POST"
      use:enhance={() => {
        return async ({ result }) => {
          await applyAction(result);
        };
      }}
    >
      <label for="first_name">First Name</label>
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
      <!-- <br />
      <label for="last_name">Last Name</label>
      <input name="last_name" type="text" required placeholder="Doe" />
      <br />
      <label for="email">Email</label>
      <input name="email" type="email" required placeholder="you@domain.com" />
      <br />
      <label for="message">Message</label><br />
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Enter your message here ..."
        required
      /> -->
      <div class="center">
        <input type="submit" value="Submit" />
      </div>
    </form>
  {/if}
</div>
