/* https://github.com/wh-iterabb-it/meowfacts
 * https://github.com/wh-iterabb-it/meowfacts/blob/main/README.md
 */
const defaultMessage =
  "Click on an image. Move slider to the right or left to increase or decrease the amount of images.";

const fetchMessage = async (callback, amount = 1) => {
  // const fetchMessages = async (amount = 10) => {
  try {
    const response = await fetch(
      `https://meowfacts.herokuapp.com/?count=${amount}`
    );
    const data = await response.json();
    // const messages = [...data.data];
    // return messages;
    const message = data.data[0];
    callback(message);
  } catch (error) {
    return "Cats mark you as their territory when they rub their faces and bodies against you, as they have scent glands in those areas.";
  }
};

// const messages = await fetchMessages(20);

const messages = (async () => {
  if (typeof window !== "undefined") return await fetchMessages(20);
})();

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

// export { defaultMessage as default, getRandomMessage };
export { defaultMessage as default, fetchMessage };
