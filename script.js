function random_image() {
  var imageA = "https://i.imgur.com/xtuWPm9.png";
  var imageB = "https://i.imgur.com/o0yub3m.png";
  var imageC = "https://i.imgur.com/xkzSoGj.png";
  var imageD = "https://i.imgur.com/wspFlQV.png"
  var imageE = "https://i.imgur.com/4i1OhPx.png";
  var imageF = "https://i.imgur.com/2VKchl6.png";
  var imageG = "https://i.imgur.com/r2pVGgV.png";

  var array_of_images = new Array ();
  console.log(array_of_images);
  array_of_images.push(imageA);
  array_of_images.push(imageB);
  array_of_images.push(imageC);
  array_of_images.push(imageD);
  array_of_images.push(imageE);
  array_of_images.push(imageF);
  array_of_images.push(imageG);
  var choice = Math.floor(Math.random() * array_of_images.length);
  document.getElementById("container").innerHTML = "<img src='" 
      + array_of_images[choice] + "'></img>";
}
