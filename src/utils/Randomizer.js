/* Import dynamic all the images inside the assets folder */
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "").replace(".png", "")] = r(item));
  });

  return images;
}

/* Get a cute idol name */
function getName(rawName) {
  let nameWithoutUnderline = rawName.replace(/_/g, " ");
  let splitName = nameWithoutUnderline.toLowerCase().split(" ");
  for (var i = 0; i < splitName.length; i++) {
    if (splitName[i].length !== 1) {
      splitName[i] =
        splitName[i].charAt(0).toUpperCase() + splitName[i].substring(1);
    }
  }
  // Directly return the joined string
  return splitName.join(" ");
}

/* Return an Idol object where contains its name and the respective image */
export function getIdol() {
  /* Read all the images */
  const images = importAll(
    require.context("../assets/images", false, /\.(png|jpeg|svg)$/)
  );

  /* Get the keys from the returned object */
  var keys = Object.keys(images);

  /* Calculate a random index to pick the idol */
  let randomNumber = Math.floor(Math.random() * keys.length);

  /* Get the key according the random number calculated */
  let randomIdol = keys[randomNumber];

  /* Return the idol picked */
  return { name: getName(randomIdol), image: images[randomIdol] };
}
