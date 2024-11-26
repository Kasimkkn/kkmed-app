export const ROUTES = {
  CUSTOMER: {
    TABS: {
      HOME: '/tabs/home',
      CART: '/tabs/cart',
      PROFILE: '/tabs/profile',
      ORDERS: '/tabs/order',
      UPLOAD: '/tabs/upload',
    },
    PAGES: {
      HOME: {
        NOTIFICATION: '/pages/notification',
        CART: '/pages/cart',
        PRODUCTS: '/pages/products',
        PRODUCT_DETAILS: '/pages/products/:id',
        CHECKOUT: '/pages/checkout',
        CATEGORY: '/pages/categorylisting',
        CATEGORY_LISTING: '/pages/categorylisting/:id',
      },
      UPLOAD: {},
      ORDERS: {
        ORDERS_DETAILS: '/pages/orderdetail/:id',
      },
      PROFILE: {
        WISHLIST: '/pages/wishlist',
        MYPRESCRIPTION: '/pages/myprescription',
        PAYMENT: '/pages/payment',
        ADDRESS: '/pages/address',
        PILL_REMINDER: '/pages/pillreminder',
        INVITE_FRIENDS: '/pages/invitefriends',
      },
    },
  },
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  HOME: {
    ROOT: '/home',
    FEATURED: '/home/featured',
    CATEGORY: '/home/category',
    DETAILS: '/home/details/:id',
  },
  ORDER: {
    ROOT: '/order',
    TRACK: '/order/track/:orderId',
    DETAILS: '/order/details/:orderId',
    CONFIRMATION: '/order/confirmation',
  },
  COMMON: {
    SETTINGS: '/settings',
    NOTIFICATIONS: '/notifications',
    SEARCH: '/search',
    HELP: '/help',
  },
};
