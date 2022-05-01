<template>
  <div :class="[{ right }]">
    <h6 v-if="author">{{ author }}</h6>
    <div class="content" :class='[{ dark }]'>{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: [
    'avatar',
    'text', // Content of the message
    'author', // Author of the message
    'dark', // Background variant of the box
    'right'
  ]
}
</script>

<style scoped>
.content {
  background: rgba(34, 72, 112, 0.1);
  border-radius: 9px;
  padding: 0.5rem;
  white-space: pre-line
}
.content.dark {
  background: rgba(18, 44, 52, 0.1);
}
.message.right {
  text-align: right;
}
.message {
  width: fit-content;
  padding: 0 0.4em;
}
h6 {
  font-size: 0.9rem;
  margin: 0 0 0.3rem 0;
}
.right {
  text-align: right;
}
</style>