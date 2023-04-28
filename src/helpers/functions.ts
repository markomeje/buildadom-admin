export const empty = (data: any) => {
  return typeof data === 'object' ? Object.keys(data || {}).length === 0 : !Boolean(data);
}

export const limit = (string: string, limit: number) => {
  return string.length > limit ? string.substring(0, limit) + "..." : string;
}