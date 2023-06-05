export const CookieList = [
  { id: '10', value: "> Advertising cookies", option: { on: "On", off: "Off" } },
  { id: '11', value: "> Marketing Cookies", option: { on: "On", off: "Off" } },
  {
    id: '12',
    value: "> Perfomance / Functionality cookies",
    option: { on: "On", off: "Off" },
  },
  { id: '13', value: "> Analytics cookies", option: { on: "On", off: "Off" } },
];

export const CookieTableContent = [
  {
    id: '6',
    name: "intercom-session-tx2p13Oc",
    service: "Intercom",
    domain: "intercom.com ",
    domainfound: "app.intercom.com",
    duration: "7 days(from each log in)",
    description:
      "Allow visitors to see ant conversation they`ve had on intercom websites",
  },
  {
    id: '7',
    name: "_stripe_mid",
    service: "Stripe",
    domain: "app.intercom.com",
    domainfound: "app.intercom.com",
    duration: "1 yr",
    description:
      "Allow users to access their coversation and have data commi=unicated on logged out pages for 1 week",
  },
  {
    id: '8',
    name: "_intercom_session",
    service: "Intercom",
    domain: "app.intercom.com",
    domainfound: "app.intercom.com",
    duration: "1 session",
    description: "Facilities Stripe payments on Intercom websites",
  },
  {
    id: '9',
    name: "recent_write",
    service: "Intercom",
    domain: "app.intercom.com",
    domainfound: "app.intercom.com",
    duration: "1 Month",
    description: "Remebers a user`s session in the Intercom Product",
  },
];

export const AccordianInput = [
  { id: '1', title: "Essential Cookies", table: CookieTableContent },
  { id: '2', title: "Advertising Cookies", table: CookieTableContent },
  { id: '3', title: "Marketing Cookies", table: CookieTableContent },
  { id: '4', title: "Performance/functionality Cookies", table: CookieTableContent },
  { id: '5', title: "Analytics Cookies", table: CookieTableContent },
];
export const CookieFooterText = `We use cookies to make our site work and also for analytics and
advertising purposes. You can enable or disable optional cookies. See
our Cookie policy for more details`;
