'use client';

import { val_loading } from '@/modules/_global/fun/val_loding';
import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, LoadingOverlay, DEFAULT_THEME } from '@mantine/core';
import { useAtom } from 'jotai';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <LoadingProvicer>
        {children}
        </LoadingProvicer>
      </MantineProvider>
    </CacheProvider>
  );
}

function LoadingProvicer({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useAtom(val_loading);
  const customLoader = (
    <svg
      width="54"
      height="54"
      viewBox="0 0 38 38"
      stroke={DEFAULT_THEME.colors.blue[9]}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
  return (
    <>
      {children}
      <LoadingOverlay
        // h={"100vh"}
        maw={"100%"}
        visible={isLoading}
        overlayBlur={2}
        transitionDuration={0}
        overlayOpacity={0.3}
        loader={customLoader}
      />
    </>
  );
}