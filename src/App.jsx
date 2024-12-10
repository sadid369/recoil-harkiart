import { useRecoilValue, useRecoilState } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  postsAtom,
  totalNotificationSelector,
} from "./atoms";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const finalValueNetwork = networkAtomCount >= 100 ? "99+" : networkAtomCount;
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  const [posts, setPosts] = useRecoilState(postsAtom);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <>
      <button>Home</button>
      <button>My Network ({finalValueNetwork})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>
      <button>Me ({totalNotificationCount})</button>
      {posts.map((post) => {
        console.log(post);
        return (
          <div key={post.id + post.userId}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
