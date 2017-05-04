import moment from 'moment';

export default {
  ago: (date = new Date()) => moment(date).fromNow(),
  time: (date = new Date()) => moment(date).format('LT'),
  short: (date = new Date()) => moment(date).format('L'),
  verbose: (date = new Date()) => moment(date).format('LL'),
};
