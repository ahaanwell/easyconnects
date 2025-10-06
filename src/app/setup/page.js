const { default: SetupPage } = require("./SetupPage");


export const metadata = {
  title: "HP - Professional Printer Download Driver & Setup Solutions",
    description:
        "Expert printer services including installation, troubleshooting, maintenance, and 24/7 technical assistance for all printer brands.",
  icons: {
    icon: "/hplogo.png", // ✅ Do not include "/public"
  },
};
function page() {
    return <SetupPage />;
}

export default page;