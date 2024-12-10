import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104,
});
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0,
});
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0,
});
export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12,
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const notifications = get(notificationsAtom);
        const messaging = get(messagingAtom);
        const jobs = get(jobsAtom);
        const network = get(networkAtom);
        return notifications + messaging + jobs + network;
    },
});


// export const postsAtom = atom({
//     key: "postsAtom",
//     default: [{}],
// });
export const postsAtom = atom({
    key: "postsAtom",
    default: selector({
        key: "postsSelector",
        get: async () => {
            // await new Promise((resolve) => setTimeout(resolve, 2000));
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            return data;
        },
    }),
});