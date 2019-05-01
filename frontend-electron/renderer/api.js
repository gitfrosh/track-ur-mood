const api = "http://localhost:3000";

export async function fetchData() {
  try {
    const res = await fetch(`${api}/mood/${"2019-04-29"}`);
    console.log(res)
    const json = await res.json();
    console.log(json);
    return json;
  } catch (e) {
    console.log(e);
  }
}

export async function postMood() {}
