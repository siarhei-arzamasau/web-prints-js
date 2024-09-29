declare type RootState = ReturnType<typeof import('../providers/store-provider/config/store').store.getState>;
declare type AppDispatch = typeof import('../providers/store-provider/config/store').store.dispatch;
