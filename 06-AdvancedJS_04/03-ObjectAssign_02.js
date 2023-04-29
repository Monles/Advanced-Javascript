let userStr = '{"a":"148","b":"banana@example.com","c":"Three"}';

let userObj = JSON.parse(userStr, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
});

console.log(userObj);