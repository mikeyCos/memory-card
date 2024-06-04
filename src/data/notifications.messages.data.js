/* https://github.com/wh-iterabb-it/meowfacts
 * https://github.com/wh-iterabb-it/meowfacts/blob/main/README.md
 */
const defaultMessage =
  "Click on an image. Move slider to the right or left to increase or decrease the amount of images.";

const fetchMessages = async (amount = 10) => {
  try {
    const response = await fetch(
      `https://meowfacts.herokuapp.com/?count=${amount}`
    );
    const data = await response.json();
    const messages = [...data.data];
    return messages;
  } catch (error) {
    return [
      "Cats mark you as their territory when they rub their faces and bodies against you, as they have scent glands in those areas.",
      "Some cats can swim.",
      "MEOW",
      "meow",
      "Stubbs, a 17-year-old orange tabby, is mayor of the historic district of Talkeetna, Alaska.",
    ];
  }
};

const messages = await fetchMessages(20);

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

export { defaultMessage as default, getRandomMessage };
