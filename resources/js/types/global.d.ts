import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { AxiosInstance } from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { route as ziggyRoute } from 'ziggy-js';
import { PageProps as AppPageProps } from './';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    /* eslint-disable no-var */
    var route: typeof ziggyRoute;
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}
// Assuming you have a global `window` object in your TypeScript environment (e.g., in a browser)
declare global {
    interface Window {
        Pusher: typeof Pusher;
        Echo: Echo;
    }
}
declare module '@inertiajs/react' {
    export declare function usePage<T>(): Page<T>;
}
