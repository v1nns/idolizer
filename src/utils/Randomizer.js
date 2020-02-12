function importAll(r) {
  return r.keys().map(r);
}

export function getIdol() {
  const images = importAll(
    require.context("../assets/images", false, /\.(png|jpeg|svg)$/)
  );

  //   let randomIndex = Math.floor(Math.random() * (images.length + 1));
  //   console.log("random index", randomIndex);

  //   console.log("images", images);
  return images;
}
