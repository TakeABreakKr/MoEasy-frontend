import clsx from 'clsx';

import { tabSection } from '../meeting-detail.css';
import * as styles from './banner.css';

export function MeetingDetailBanner() {
  return <div className={clsx(styles.banner, tabSection)}> </div>;
}
