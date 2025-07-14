export default (isRTL: boolean) => ({
  ml8: {
    marginHorizontal: '8@s',
  },
  skeletonStyle: {
    height: '20@vs',
    width: '100%',
  },
  defaultContainer: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: isRTL ? 'flex-end' : 'flex-start',
    // vertical align
    alignItems: 'baseline',
  },
});
