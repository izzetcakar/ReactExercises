import axios from 'axios'

const getUser = async (userId) => {
  const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
  return user;
}

const getPost = async (userId) => {
  const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
  return post;
}

const getData = async (userId) => {
  try {
    const user = await getUser(userId);
    const posts = await getPost(userId);

    user.posts = posts;
    return user;

  } catch (error) {
    console.log(error);
  }
}

export default getData;