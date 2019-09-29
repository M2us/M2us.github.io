new Vue({
  el: '#main', 
  data: {
    title: 'WoWruRU Project',
    titleDescription: 'Русификация World of Warcraft 1.12.1',
    content: [
      { title: 'Клиент', link: 'https://wowruru.github.io/client.html' },
      { title: 'Аддоны', link: 'https://wowruru.github.io/addons.html' },
      { title: 'Серверная русификация', link: 'https://github.com/WoWruRU/classicdb_ruRU' },
    ],
    maintained: { title: ['WoWruRU Project maintained by', 'WoWruRU'], link: 'https://github.com/WoWruRU' },
    vkLink: 'https://vk.com/wowruru',
  }
})