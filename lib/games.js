export async function getLatestGames() {
  const url = "https://www.freetogame.com/api/games";
  const rawData = await fetch(url);
  const json = await rawData.json();

  return json.map((game) => {
    const { title, release_date, thumbnail, genre, id, short_description } =
      game;

    return {
      title,
      releaseDate: release_date,
      image: thumbnail,
      genre,
      id,
      description: short_description,
    };
  });
}

export async function getGameDetails(id) {
  const url = `https://www.freetogame.com/api/game?id=${id}`;
  const rawData = await fetch(url);
  const json = await rawData.json();

  const {
    title,
    description,
    thumbnail,
    genre,
    platform,
    publisher,
    developer,
    release_date,
  } = json;

  return {
    title,
    description,
    image: thumbnail,
    genre,
    platform,
    publisher,
    developer,
    releaseDate: release_date,
  };
}
