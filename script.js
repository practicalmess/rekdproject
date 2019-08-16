// Fetch character data by ID
const data = $.parseJSON($.ajax({
  url: 'https://api.jikan.moe/v3/character/246',
  dataType: "json",
  async: false
}).responseText);

// Fetch gallery images
const pictures = $.parseJSON($.ajax( {
  url: 'https://api.jikan.moe/v3/character/246/pictures',
  dataType: "json",
  async: false
}).responseText).pictures;



// Store relevant character details as the fields they will be used for
const details = {
  name:data.name,
  about:data.about.split('\n'),
  followers:data.animeography.length,
  following:data.mangaography.length,
  image_url:data.image_url
};

// Insert main image as profile picture
$('#profile-img').prepend(`<img src=${details.image_url}>`);
$('#name').prepend(`${details.name}`);
$('#post-count').prepend(`${pictures.length}`);
$('#follower-count').prepend(`${details.followers}`);
$('#following-count').prepend(`${details.following}`);

for (let i=0; i<6; i++) {
  $('#detail-list').append(`<li>${details.about[i]}</li>`);
}

$.each(pictures, (index, value) => {
  // console.log(index);
  // console.log(value);
  $('.gallery').append(`<div class="wrapper"><img src=${value.large}></div>`)
});




console.log(details);
// console.log(pictures);