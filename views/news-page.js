const NewsPage = {
data() {
  return {
    posts: [],
  }
},
mounted() {
  axios.get('https://koreanjson.com/posts')
  .then(response => {
    this.posts = response.data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
},
template: `
<div id="news" class="contents">
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
</div>
`
};