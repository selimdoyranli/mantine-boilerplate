import { Router } from '@/Router';
import { UIProvider } from '@/ui';

export default function App() {
  return (
    <UIProvider>
      <Router />
    </UIProvider>
  );
}
