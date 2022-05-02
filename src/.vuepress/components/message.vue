<template>
  <div class="wrap" :class="[{ right: right || right === '' }]">
    <slot name="author">
      <h6 v-if="author">{{ author }}</h6>
    </slot>
    <div class="message" :class="[{ right: right || right === '' }]">
      <slot name="status">
        <p v-if="sent || sent === ''" class="status">已发送</p>
        <p v-if="read || read === ''" class="status">已读</p>
        <p v-if="status" class="status">{{ status }}</p>
      </slot>
      <div class="content-box">
        <div class="content" :class="[{ right: right || right === '' }]">
          <slot>
            {{ text }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "avatar",
    "text", // Content of the message
    "author", // Author of the message
    "dark", // Background variant of the box
    "right",
    "sent",
    "read",
    "status",
  ],
};
</script>

<style scoped>
@media (prefers-color-scheme: light) {
  .wrap {
    --left-bubble-bg: rgba(34, 72, 112, 0.13);
    --right-bubble-bg: rgba(18, 44, 52, 0.14);
  }
}
@media (prefers-color-scheme: dark) {
  .wrap {
    --left-bubble-bg: rgba(255,255,255, 0.7);
    --right-bubble-bg: rgba(255,255,255, 0.7);
  }
}
</style>
<style lang="scss" scoped>
.dark {
  .wrap {
    --left-bubble-bg: hsla(202, 65%, 90%, 0.15);
    --right-bubble-bg: hsla(178, 58%, 87%, 0.2);
  }
}
$left-bubble-bg: var(--left-bubble-bg);
$right-bubble-bg: var(--right-bubble-bg);
.wrap {
  display: flex;
  flex-direction: column;

  & .message {
    display: flex;
    align-items: flex-end;
    padding: 0 0.4em;
    & .status {
      order: 2;
      margin: 0;
      margin-right: 0.2rem;
      font-size: 0.8rem;
      padding-left: 0.3rem;
      opacity: 0.5;
      white-space: nowrap;
    }

    &.right {
      flex-direction: row-reverse;
    }
    & .content-box {
      order: 1;
      max-width: 75%;
      & .content {
        white-space: pre-line;
        border-radius: 9px;
        padding: 0.5rem;
        background: $left-bubble-bg;

        &.right {
          background: $right-bubble-bg;
        }
      }
    }
  }
}
h6 {
  font-size: 0.9rem;
  margin: 0 0 0.3rem 0;
}
</style>