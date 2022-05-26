export const GetData = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

export const PostData = async (url, object = {}) => {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(object),
  });
  let data = await response.json();
  return data;
};

export const PutData = async (url, object = {}) => {
  let response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(object),
  });
  let data = await response.json();
  return data;
};

export const DeleteData = async (url, object = {}) => {
  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(object),
  });
  let data = await response.json();
  return data;
};