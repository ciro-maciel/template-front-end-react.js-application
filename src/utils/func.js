import moment from 'moment';

export default {
  parseMarkDown: (mdString) => {
    let mdChangelogTxt = window.atob(mdString.replace('data:text/markdown;base64,', ''));
    const mdChangelogArray = mdChangelogTxt.match(/\(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))\)/g);

    if (mdChangelogArray) {
      mdChangelogArray.forEach((item) => {
        const formatedItem = item.replace('(', '\\(').replace(')', '\\)');

        mdChangelogTxt = mdChangelogTxt.replace(
          new RegExp(formatedItem, 'g'),
          `- ${moment(item.replace('(', '').replace(')', '')).format('dddd[,] LL')}`
        );
      });

      mdChangelogTxt = mdChangelogTxt.replace(new RegExp('Features', 'g'), '🎁 New Features');
      mdChangelogTxt = mdChangelogTxt.replace(new RegExp('Bug Fixes', 'g'), '⭐ Improvements');

      return mdChangelogTxt;
    }

    return '';
  },
};
