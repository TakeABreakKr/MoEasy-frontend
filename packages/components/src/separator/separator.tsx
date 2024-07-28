import { separatorVariants } from './separator.css';

export default function Separator({
  direction = 'vertical',
  color = 'currentColor',
}: {
  direction?: 'vertical' | 'horizontal';
  color?: string;
}) {
  return <span className={separatorVariants({ direction })} />;
}
