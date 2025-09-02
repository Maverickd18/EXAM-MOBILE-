import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageProvider } from '../shared/provide/storage-provider';
import { Root } from './auth-guard';

export const isloggedGuard: CanActivateFn = async (route, state) => {
  const storage = inject(StorageProvider);
  const router = inject(Router);

  const user = await storage.get<Root>('user');
  if (user) {
    router.navigate(['/home']);
    return false;
  }
  return true;
};

