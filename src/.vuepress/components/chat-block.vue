<template>
  <div class="window">
    <div class="head">chat</div>
    <div class="messages">
      <div v-for="(message, index) in messages" :key="message.id || index" class="message-wrap" :class="[(message.self || message.right) && 'self']">
        <p v-if="message.self && message.sent" class="sent">已发送</p>
        <p v-if="message.self && message.read" class="sent">已读</p>
        <message
          :class="[{ right: (message.right || message.self) && !message.sent && !message.read }]"
          :dark="message.self"
          :text="message.text"
          :author="message.author"
          :avatar="message.avatar"
          :last="index < messages.length"
        />
      </div>
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
<style lang="scss" scoped>
@import "../styles/index.scss";
$border-radius: 6px;
.window {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  // background-color: rgba(78, 165, 217, 0.1);
  background: linear-gradient(rgba(42, 68, 148, 0.1), rgba(78, 165, 217, 0.1));
  border-radius: $border-radius;
  outline: 0.5px solid rgba(127, 127, 127, 0.2);
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
    background: linear-gradient(rgba(34, 72, 112, 0.7), rgba(18, 44, 52, 0.78));
    text-align: center;
    color: white;
  }

  .messages {
    flex-grow: 1;
    overflow: auto;
    padding: 2rem;

    & .message-wrap {
      display: flex;
      align-items: flex-end;
      & .sent {
        margin: 0;
        margin-left:auto;
        margin-right: 0.2rem;
        font-size: 0.8rem;
        padding-left: 0.3rem;
        opacity: 0.5;
      }
    }
  }
  .messages > :not(:nth-child(1)) {
    padding-top: 0.8rem;
  }
.right {
    margin-left: auto;
  }
}
</style>