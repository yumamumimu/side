import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  const isExternalLink = /^https?:\/\//.test(href); // Pengecekan untuk URL eksternal

  return (
    <Link
      target={isExternalLink ? "_blank" : undefined} // Link eksternal dibuka di browser baru
      {...rest}
      href={href as any} // casting href ke 'any' agar tidak error saat diteruskan ke Link
      onPress={async (event) => {
        if (Platform.OS !== 'web' && isExternalLink) {
          // Mencegah aksi default untuk link eksternal di platform non-web
          event.preventDefault();
          // Membuka link eksternal di dalam browser aplikasi
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
