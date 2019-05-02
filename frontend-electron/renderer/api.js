const api = "http://localhost:3000";
import moment from "moment";
const today = moment().format("YYYY-MM-DD");

export async function fetchData() {
  try {
    const res = await fetch(`${api}/mood/${today}`);
    console.log(res);
    const json = await res.json();
    console.log(json);
    return json;
  } catch (e) {
    console.log(e);
  }
}

export async function postMood(data) {
  console.log(data);
  try {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(`${api}/moods/`, config);
    // const json = await response.json()
    if (response.ok) {
      return response;
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error)
  }
}
