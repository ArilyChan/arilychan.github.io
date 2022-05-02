<template>
  <div class="window">
    <div class="head">chat</div>
    <div class="messages">
      <div
        v-for="(message, index) in messages"
        :key="message.id || index"
        class="message-wrap"
      >
        <message
          :right="message.right || message.self"
          :text="message.text"
          :author="message.author"
          :avatar="message.avatar"
          :last="index < messages.length"
          :sent="message.sent"
          :read="message.read"
        />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import message from "./message.vue";
export default {
  components: {
    message,
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
@media (prefers-color-scheme: light) {
  .window {
    --window-background: linear-gradient(
      rgba(42, 68, 148, 0.05),
      rgba(78, 165, 217, 0.15)
    );
    --head-background: linear-gradient(
      rgba(34, 72, 112, 0.5),
      rgba(18, 44, 52, 0.76)
    );
  }
}
@media (prefers-color-scheme: dark) {
  .window {
    --window-background: rgba(78, 165, 217, 0.12);
    --head-background: linear-gradient(
      hsla(202, 65%, 90%, 0.2),
      hsla(225, 57%, 89%, 0.1)
    );
  }
}
</style>
<style lang="scss" scoped>
@import "../styles/index.scss";
.dark {
  .window {
    --window-background: rgba(78, 165, 217, 0.12);
    --head-background: linear-gradient(
      hsla(202, 65%, 90%, 0.2),
      hsla(225, 57%, 89%, 0.1)
    );
  }
}
$border-radius: 6px;
$window-background: var(--window-background);
$head-background: var(--head-background);
.window {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  // background-color: ;
  background: $window-background;
  border-radius: $border-radius;
  border: 0.5px solid rgba(127, 127, 127, 0.2);
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  & .head {
    &::before {
      content: "-- ";
    }
    &::after {
      content: " --";
    }
    padding: 0;
    margin: 0;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    // background-color: rgba(34, 72, 112,0.6);
    background: $head-background;
    text-align: center;
    color: white;
  }

  .messages {
    flex-grow: 1;
    overflow: auto;
    padding: 2rem;
  }
  .messages > :not(:nth-child(1)) {
    padding-top: 0.8rem;
  }
}
</style>