import { CardProps } from '@moeasy/storybook/ui/card';
import {
  CardDescription,
  CardHeader,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';

import { commonCard } from './card.css';

export default function MainCommonCard({
  idx,
  title,
  className,
  description = '',
  count = 0,
  maxCount = 10,
  ...props
}: CardProps) {
  return (
    <CardWrapper data-meeting-index={idx} className={commonCard} {...props}>
      <CardThumbnail src={`https://via.placeholder.com/72/${idx}`} alt={title} />
      <CardHeader />
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CardWrapper>
  );
}
