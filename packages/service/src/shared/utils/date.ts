import { Dayjs, ManipulateType } from 'dayjs';

export function* dateRange(a: Dayjs, b: Dayjs, unit: ManipulateType = 'M') {
  let d = a.clone().startOf(unit).subtract(1, unit);
  b = b.subtract(1, unit);
  while (d < b) {
    yield (d = d.add(1, unit));
  }
  return false;
}
