
'use client';

import { useEffect } from 'react';

export default function GlobalClientEffects() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    const preventAutoScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        e.preventDefault();
        target.scrollIntoView = () => {};
      }
    };
    
    document.addEventListener('focus', preventAutoScroll, true);
    
    const preventScrollOnFocus = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        input.addEventListener('focus', (e) => {
          e.preventDefault();
          window.scrollTo({ top: window.scrollY, left: 0, behavior: 'instant' });
        }, { passive: false });
      });
    };
    
    preventScrollOnFocus();
    
    const observer = new MutationObserver(preventScrollOnFocus);
    observer.observe(document.body, { childList: true, subtree: true });
    
    const handleBeforeUnload = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    const style = document.createElement('style');
    style.textContent = `
      * {
        scroll-behavior: auto !important;
      }
      
      input:focus,
      textarea:focus,
      select:focus {
        scroll-margin: 0 !important;
        scroll-padding: 0 !important;
      }
      
      body {
        overflow-x: hidden;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.removeEventListener('focus', preventAutoScroll, true);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      observer.disconnect();
      style.remove();
    };
  }, []);

  return null;
}
