import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import Head_meta from "./Head_meta";
const Layout = ({ navigation, children, settings, footer }) => {
    return (
        <div className="content">
            <Head_meta />
            <Navigation
                navigation={navigation}
                settings={settings}
            />
            {children}
            {/* <Footer
                footer={footer}
                settings={settings}
            /> */}
        </div>
    );
}

export default Layout;