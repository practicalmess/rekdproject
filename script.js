const data = $.parseJSON($.ajax({
  url: 'https://api.jikan.moe/v3/character/246',
  dataType: "json",
  async: false
}).responseText);
const details = {
  name:data.name,
  about:data.about,
  followers:data.animeography.length,
  following:data.mangaography.length,
  image_url:data.image_url
};
const pictures = $.parseJSON($.ajax( {
  url: 'https://api.jikan.moe/v3/character/246/pictures',
  dataType: "json",
  async: false
}).responseText);
console.log(details);
console.log(pictures.pictures.length);