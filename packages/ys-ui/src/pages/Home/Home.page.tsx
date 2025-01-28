import { FeedCard } from '@/ui';
import { useColorScheme, useTheme } from '@/ui/hooks';
import classes from './Home.page.module.css';

export default function HomePage() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { activeThemeKey, setActiveThemeKey } = useTheme();

  return (
    <div className={classes.homePage}>
      <h1 className={classes.title}>ys-ui Demo</h1>

      <div className={classes.group}>
        <pre>useColorScheme & useTheme hooks from public ui</pre>

        <div className={classes.colorSchemeButtons}>
          <span>Color Scheme: {colorScheme}</span>
          <button type="button" onClick={() => setColorScheme('light')}>
            Light
          </button>

          <button type="button" onClick={() => setColorScheme('dark')}>
            Dark
          </button>

          <button type="button" onClick={() => setColorScheme('auto')}>
            Auto
          </button>
        </div>

        <div className={classes.colorSchemeButtons}>
          <span>Theme: {activeThemeKey}</span>
          <button type="button" onClick={() => setActiveThemeKey('base')}>
            Base
          </button>

          <button type="button" onClick={() => setActiveThemeKey('alternative')}>
            Alternative
          </button>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.list}>
          <pre>FeedCard component from public ui</pre>
          {Array.from({ length: 10 }).map((_, index) => (
            <FeedCard key={index} title="Feed Card" description="This is a feed card" />
          ))}
        </div>
      </div>
    </div>
  );
}
