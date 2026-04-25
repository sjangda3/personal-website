import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const handle: Handle = async ({ event, resolve }) => {
  const user = env.SITE_USER;
  const pass = env.SITE_PASSWORD;

  if (!user || !pass) {
    return resolve(event);
  }

  const header = event.request.headers.get('authorization');
  if (header?.startsWith('Basic ')) {
    const decoded = atob(header.slice(6));
    const [u, p] = decoded.split(':');
    if (u === user && p === pass) {
      return resolve(event);
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Personal Website", charset="UTF-8"'
    }
  });
};
