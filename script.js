// Fetch character data by ID
const data = $.parseJSON($.ajax({
  url: 'https://api.jikan.moe/v3/character/246',
  dataType: "json",
  async: false
}).done(() => {
  console.log("Character details loaded");
}).fail((response) => {
  // Show response status and message instead of character name on fail
  $('#name').append(`${response.responseJSON.status}: ${response.responseJSON.message}`);
  console.log(response.responseJSON);
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

// Insert profile image and details
$('#profile-img').prepend(`<img src=${details.image_url}>`);
$('#name').prepend(`${details.name}`);
$('#post-count').empty().prepend(`${pictures.length}`);
$('#follower-count').empty().prepend(`${details.followers}`);
$('#following-count').empty().prepend(`${details.following}`);

// Insert first 6 lines of 'about' property as bio
for (let i=0; i<6; i++) {
  const detailItem = details.about[i].slice(0, -3);
  $('#detail-list').append(`<li>${detailItem}</li>`);
}

//Insert each picture in the gallery
$.each(pictures, (index, value) => {
  $('.gallery').append(`<div class="wrapper"><img src=${value.large}></div>`)
});
