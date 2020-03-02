import moment from 'moment';

export const required = (value) => {
  if (value && typeof value === 'string' && value.trim() !== '') {
    return undefined;
  }
  if (value && value.constructor === Array && value.length > 0) {
    return undefined;
  }
  if (value && typeof value === 'number') {
    return undefined;
  }
  if (typeof value === 'boolean') {
    return undefined;
  }
  if (moment.isMoment(value) && value.isValid()) {
    return undefined;
  }
  if (typeof value === 'object') {
    return undefined;
  }
  return 'This field is required.';
};

// (value && value.trim() !== '' ? undefined : 'This is a required field.');

export const maxLength = (max) => (value) => (value && value.length > max ? `Must be ${max} characters or less` : undefined);

export const maxLength255 = maxLength(255);

export const percentage = (value) => (value > 100 ? 'Invalid percentage amount' : undefined);

export const number = (value) => (value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined);

export const minValue = (min) => (value) => (value && value < min ? `Must be at least ${min}` : undefined);

export const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined);

export const username = (value) => (value && !/^[A-Z0-9_]+$/i.test(value) ? 'Invalid username' : undefined);
