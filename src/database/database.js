const SERVER = "http://localhost:5008/api/";
export const updateScore = async (
    name,
    score
  ) => {
    const requestOptions = {
      method: "Post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({name,score}),
    };
    try {
      let controller="increase"
      const data = await fetch(
        SERVER + controller,
        requestOptions
      );
      if (data.ok) {
        const json = await data.json();
        console.log(json);
        return json;
      }
      return null;
    } catch {
      throw new Error("Error while fetching data");
    }
  };

  export const getScoreFromDb = async (name) => {
    const requestOptions = {
      method: "get",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    try {
      const data = await fetch(SERVER + `player/${name}`, requestOptions);
      if (data.ok) {
        const json = await data.json();
        return json;
      }
      return new Error("Error while fetch data from db");
    } catch {
      throw new Error("Network Error!");
    }
  };
