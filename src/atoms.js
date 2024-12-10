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