export function fetchUserActivities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "Logged in Successfully",
        "Visited Dashboard",
        "Updated profile settings",
        "Logged out and back in",
      ]);
    }, 1500);
  });
}
