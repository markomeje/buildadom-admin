export const empty = (data: any) => {
  return typeof data === 'object' ? Object.keys(data || {}).length === 0 : !Boolean(data);
}

export const limit = (string: string, limit: number) => {
  return string.length > limit ? string.substring(0, limit) + "..." : string;
}

export const ucfirst = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const ucwords = (word: string) => {
  let wordArr = word.split(' ');
  for (var i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
  }

  return wordArr.join(' ');
}

export const format = (date: string) => {
  return new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}