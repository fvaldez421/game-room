/**
 * local storage helper tool
 */
const keyPrefix = 'GameRoom-';

export default {
  get(key) {
    return window.localStorage.getItem(`${keyPrefix}${key}`);
  },
  set(key) {
    return window.localStorage.setItem(`${keyPrefix}${key}`);    
  }
}