<script lang="ts">
  import { onMount } from 'svelte';

  const PASSWORD = 'ahmed';
  const KEY = 'site_auth_v1';

  let unlocked = false;
  let ready = false;
  let value = '';
  let error = '';
  let shake = false;
  let show = false;

  onMount(() => {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(KEY) === PASSWORD) {
      unlocked = true;
    }
    ready = true;
  });

  function submit(e: Event) {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(KEY, PASSWORD);
      unlocked = true;
      error = '';
    } else {
      error = 'Incorrect password';
      shake = false;
      requestAnimationFrame(() => (shake = true));
    }
  }

  function onMaskedInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const next = target.value;
    const oldMasked = '*'.repeat(value.length);

    let prefixLen = 0;
    while (
      prefixLen < oldMasked.length &&
      prefixLen < next.length &&
      next[prefixLen] === '*'
    ) prefixLen++;

    let suffixLen = 0;
    while (
      suffixLen < oldMasked.length - prefixLen &&
      suffixLen < next.length - prefixLen &&
      next[next.length - 1 - suffixLen] === '*'
    ) suffixLen++;

    const inserted = next.slice(prefixLen, next.length - suffixLen);
    const removedCount = oldMasked.length - prefixLen - suffixLen;

    value =
      value.slice(0, prefixLen) +
      inserted +
      value.slice(prefixLen + removedCount);

    target.value = '*'.repeat(value.length);
    const cursor = prefixLen + inserted.length;
    target.setSelectionRange(cursor, cursor);
  }
</script>

{#if !ready}
  <!-- avoid flicker -->
{:else if unlocked}
  <slot />
{:else}
  <main class="page">
    <section class="intro">
      <p class="sub">Enter password to continue</p>
      <form class="row" class:shake on:submit={submit} on:animationend={() => (shake = false)}>
        <div class="input-wrap">
          {#if show}
            <input
              type="text"
              bind:value
              placeholder="Password"
              autocomplete="current-password"
              autofocus
              required
            />
          {:else}
            <input
              type="text"
              value={'*'.repeat(value.length)}
              on:input={onMaskedInput}
              placeholder="Password"
              autocomplete="current-password"
              autofocus
              required
            />
          {/if}
          <button
            type="button"
            class="eye"
            aria-label={show ? 'Hide password' : 'Show password'}
            on:click={() => (show = !show)}
          >
            {#if show}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.77 19.77 0 0 1 5.06-5.94"/><path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.77 19.77 0 0 1-3.16 4.19"/><path d="M14.12 14.12A3 3 0 1 1 9.88 9.88"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            {:else}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            {/if}
          </button>
        </div>
        <button type="submit" class="btn">Enter</button>
      </form>
      {#if error}
        <div class="error">{error}</div>
      {/if}
    </section>
  </main>
{/if}

<style>
  .page {
    max-width: 1050px;
    margin: 0 auto;
    padding: 6rem 2rem 8rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .intro {
    width: 100%;
    max-width: 600px;
    text-align: center;
  }

  .heading {
    font-size: 2.75rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #0a0a0a;
    margin: 0 0 1rem;
  }

  .sub {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #4a4a4a;
    margin: 0 0 1.5rem;
  }

  .hl {
    font-weight: 600;
    color: #111;
    background-image: linear-gradient(transparent 65%, #ffe0b8 65%);
    padding: 0 2px;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    width: 380px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0.2rem 0.2rem 0.2rem 0.15rem;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.6rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .row:focus-within {
    border-color: #0a0a0a;
    box-shadow: 0 0 0 3px rgba(10, 10, 10, 0.06);
  }

  .row.shake {
    animation: shake 0.35s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  }

  @keyframes shake {
    10%, 90% { transform: translateX(-2px); }
    20%, 80% { transform: translateX(4px); }
    30%, 50%, 70% { transform: translateX(-6px); }
    40%, 60% { transform: translateX(6px); }
  }

  .input-wrap {
    position: relative;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 0.3rem 2rem 0.3rem 0.65rem;
    font-family: inherit;
    font-size: 0.9rem;
    color: #111;
    background: transparent;
    border: none;
    outline: none;
  }

  input::placeholder {
    color: #8a8a8a;
  }

  .eye {
    position: absolute;
    right: 0.3rem;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 6px;
    color: #8a8a8a;
    cursor: pointer;
    transition: color 0.15s ease, background 0.15s ease;
  }

  .eye:hover {
    color: #0a0a0a;
    background: rgba(0, 0, 0, 0.04);
  }

  .btn {
    flex-shrink: 0;
    padding: 0.35rem 0.85rem;
    font-family: inherit;
    font-size: 0.85rem;
    font-weight: 500;
    color: #fff;
    background: #0a0a0a;
    border: none;
    border-radius: 0.45rem;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .btn:hover {
    background: #222;
    transform: scale(1.02);
  }

  .error {
    margin-top: 0.9rem;
    color: #c0392b;
    font-size: 0.9rem;
  }

  @media (max-width: 640px) {
    .page {
      padding: 3rem 1.25rem 4rem;
    }
    .heading {
      font-size: 1.9rem;
    }
  }
</style>
