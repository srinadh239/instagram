export async function getProfileDetails() {
  const response = await fetch(`api/profiles?id=1&_embed=posts`);
  return response.json();
}

export async function getPostDetails(id) {
  // As there is no authentication, hard coding profileId
  const response = await fetch(`/api/posts?profileId=1&id=${id}&_embed=comments`);
  return response.json();
}

export async function getComments(id) {
  const response = await fetch(`/api/comments?postId=${id}&_expand=profile`);
  return response.json();
}

export async function addComments(id, comment) {
  console.log(id);
  console.log(comment);
  const response = await fetch(`/api/comments?_expand=profile`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ postId: id, likes: 0, text: comment, profileId: 1 }) // As there is no authentication, hard coding profileId
  });

  return response.json();
}