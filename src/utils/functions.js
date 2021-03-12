import moment from 'moment';

export default {
  parseChangelog: (htmlString) => {
    const htmlArray = htmlString.match(/\(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))\)/g);

    if (htmlArray) {
      htmlArray.forEach((item) => {
        const formatedItem = item.replace('(', '\\(').replace(')', '\\)');

        htmlString = htmlString.replace(
          new RegExp(formatedItem, 'g'),
          `- ${moment(item.replace('(', '').replace(')', '')).format('dddd[,] LL')}`
        );
      });

      htmlString = htmlString.replace(new RegExp('Features', 'g'), '🎁 New Features');
      htmlString = htmlString.replace(new RegExp('Bug Fixes', 'g'), '⭐ Improvements');

      return htmlString;
    }

    return '';
  },
};
