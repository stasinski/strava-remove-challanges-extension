// feed class
const FEED = ".feed";
//  activity wrapper class
const ACTIVITY_WRAPPER = ".react-card-container";
//  challange post -> data-react-class="ChallengeJoin"
const CHALLENGE_JOIN = "ChallengeJoin";

const config = { childList: true, subtree: true, attributes: true };

let feedElement = document.querySelector(FEED);

const callback = () => {
  if (!feedElement) {
    return;
  }
  const activities = document.querySelectorAll(ACTIVITY_WRAPPER);

  activities.forEach((activity) => {
    const child = activity.children[0];
    if (child.dataset.reactClass === CHALLENGE_JOIN) {
      activity.style.display = "none";
    }
  });
};

const updateFeed = () => {
  feedElement = document.querySelector(FEED);
  const observer = new MutationObserver(callback);

  observer.observe(feedElement, config);
};

window.addEventListener("hashchange", function () {
  updateFeed();
});

callback();
