import { component$, Slot } from '@builder.io/qwik';
import { Header } from '~/components/layout/header';

export default component$(() => {
  return (
    <div class="app-layout">
      <Header />
      <main class="main-content">
        <Slot />
      </main>
    </div>
  );
});