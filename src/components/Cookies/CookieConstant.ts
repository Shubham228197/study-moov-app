export const CookieList = [
    {value: '> Advertising cookies', option: {on: 'On', off: 'Off'}},
    {value: '> Marketing Cookies', option: {on: 'On', off: 'Off'}},
    {value: '> Perfomance / Functionality cookies', option: {on: 'On', off: 'Off'}},
    {value: '> Analytics cookies', option: {on: 'On', off: 'Off'}}
]

export const CookieTableContent = [
    {name: 'intercom-session-tx2p13Oc', service: 'Intercom', domain: 'intercom.com ', domainfound: 'app.intercom.com', duration: '7 days(from each log in)', description: 'Allow visitors to see ant conversation they`ve had on intercom websites'},
    {name: '_stripe_mid', service: 'Stripe', domain: 'app.intercom.com', domainfound: 'app.intercom.com', duration: '1 yr', description: 'Allow users to access their coversation and have data commi=unicated on logged out pages for 1 week'},
    {name: '_intercom_session', service: 'Intercom', domain: 'app.intercom.com', domainfound: 'app.intercom.com', duration: '1 session', description: 'Facilities Stripe payments on Intercom websites'},
    {name: 'recent_write', service: 'Intercom', domain: 'app.intercom.com', domainfound: 'app.intercom.com', duration: '1 Month', description: 'Remebers a user`s session in the Intercom Product'}
]

export const AccordianInput = [
    {title: 'Essential Cookies', table: CookieTableContent},
    {title: 'Advertising Cookies', table: CookieTableContent},
    {title: 'Marketing Cookies', table: CookieTableContent},
    {title: 'Performance/functionality Cookies', table: CookieTableContent},
    {title: 'Analytics Cookies', table: CookieTableContent},
]