import formatTime from "./time";

test("convert time", () => {
  expect(formatTime(1)).toEqual("0:0:1");
  expect(formatTime(100)).toEqual("0:1:0");
  expect(formatTime(110)).toEqual("0:1:10");
  expect(formatTime(200)).toEqual("0:2:0");
  expect(formatTime(6000)).toEqual("1:0:0");
  expect(formatTime(12000)).toEqual("2:0:0");
  expect(formatTime(3600210)).toEqual("600:2:10");
  expect(formatTime(130000)).toEqual("21:40:0");
});
