
export type Vec2 = [number, number];

export const subVec2 = (a: Vec2, b: Vec2): Vec2 => {
  return [a[0] - b[0], a[1] - b[1]];
}
