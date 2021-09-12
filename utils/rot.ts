export const rot = (text: any, i: number = 13) => {
  const rotated: string = text.replace(/[a-zA-Z]/g, (c: any) => {
    return String.fromCharCode(
      (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26
    );
  });

  return rotated;
};

export const toMap = Array(25).fill('x');
