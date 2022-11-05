export const combineId = (currentUserId: string, userId: string) => {
  return currentUserId > userId
    ? currentUserId + userId
    : userId + currentUserId;
};
