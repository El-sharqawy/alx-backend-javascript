export default function createInt8TypedArray(length, position, value) {
  const arrBuffer = new ArrayBuffer(length);
  const dataView = new DataView(arrBuffer);
  try {
    dataView.setInt8(position, value);
  } catch (error) {
    throw Error('Position outside range');
  }
  return dataView;
}
