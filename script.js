// Fetch character data by ID
const data = $.parseJSON($.ajax({
  url: 'https://api.jikan.moe/v3/character/246',
  dataType: "json",
  async: false
}).responseText);

// Store relevant character details as the fields they will be used for
const details = {
  name:data.name,
  about:data.about,
  followers:data.animeography.length,
  following:data.mangaography.length,
  image_url:data.image_url
};

// Insert main image as profile picture
$('#profile-img').prepend(`<img src=${details.image_url}>`);

// Fetch gallery images
const pictures = $.parseJSON($.ajax( {
  url: 'https://api.jikan.moe/v3/character/246/pictures',
  dataType: "json",
  async: false
}).responseText);

console.log(details);
console.log(pictures.pictures.length);