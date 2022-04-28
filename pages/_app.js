import { Provider } from "@skynexui/components";

export default function MyApp({ Component, pageProps }) {
    return ( 
        <Provider>
            <Component {...pageProps} /> 
        </Provider>
    )
}
