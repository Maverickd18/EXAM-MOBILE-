import { HttpInterceptorFn } from '@angular/common/http';

export const mineInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
  if (req.url.includes('newsapi')) {
    const keyapi ="429223923f894ee4af2bf86c64298863" ;
    const rectificated = req.clone({
      setHeaders:{
        'X-Api-Key': keyapi
      }
    });
    return next(rectificated);
  }
  return next(req);
};
