import { Router } from '@/Router';
import UIProvider from '@/ui/components/Provider/UIProvider/UIProvider';

export default function App() {
  return (
    <UIProvider>
      <Router />
    </UIProvider>
  );
}
