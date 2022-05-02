# test

<chat-block class="theme-default-content" :messages="[
  {
    author: '小阿日',
    self: false,
    text: 'test',
  },
  {
    self: true,
    text: '?',
    read: true
  },
  {
    author: '小阿日',
    self: false,
    text: '什么？',
  },
  {
    self: true,
    text: 'test什么',
  },
  {
    sent: true,
    self: true,
    text: '不理我？',
  },
]" />
<br>
<br>
<chat-block>
<message right sent>
  <img src="http://localhost:8081/images/logo.png" style="width: 10em">
</message>
<message author="小阿日">
  <button>按一下就炸</button>
</message>
</chat-block>

[palettes](https://coolors.co/122c34-224870-2a4494-4ea5d9-44cfcb)