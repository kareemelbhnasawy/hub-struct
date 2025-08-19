import Reactotron, {
  trackGlobalErrors,
  trackGlobalLogs,
} from 'reactotron-react-native';

// const middleware = tron => {
//   /* custom plugin definition where you can add your own */
// };

Reactotron.configure({
  name: 'React Native - HUB',
})
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: true, // there are more options to editor
    overlay: false, // just turning off overlay,
    log: true,
  })
  .use(trackGlobalErrors())
  .use(trackGlobalLogs())
  //   .use(middleware) // plus some custom made plugin. // uncomment the middleware an this line if you wish to add custom plugins.
  .connect();

console.tron = Reactotron;
