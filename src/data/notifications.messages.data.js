/* https://github.com/wh-iterabb-it/meowfacts
 * https://github.com/wh-iterabb-it/meowfacts/blob/main/README.md
 */
const defaultMessage =
  "Get points by clicking on an image but don't click on any more than once! Move slider to the right or left to increase or decrease the amount of images.";

const fetchMessage = async (callback, amount = 1) => {
  try {
    const response = await fetch(
      `https://meowfacts.herokuapp.com/?count=${amount}`
    );
    const { data } = await response.json();
    const [message] = data;
    callback(message);
  } catch (error) {
    return "Cats mark you as their territory when they rub their faces and bodies against you, as they have scent glands in those areas.";
  }
};

// export { defaultMessage as default, getRandomMessage };
export { defaultMessage as default, fetchMessage };
