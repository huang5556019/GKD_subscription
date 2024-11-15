import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.sbyd.app',
  name: '轻松阅',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      activityIds: 'io.sbyd.app.ui.book.read.ReadBookActivity',
      rules: [
        {
          key: 1,
          matches:
            'TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13274336',
        },
        {
          key: 2,
          matches: [
            '[text^="立即" || text^="查看" || text^="领取"][text.length=4]', // 立即抢购,立即下载,立即申请,查看详情,领取优惠
            '[id="android:id/content"] >2 FrameLayout[childCount=3||childCount=2] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]', // 非广告页面下没有这种节点,不会误触
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13302326',
            'https://i.gkd.li/i/13313576',
            'https://i.gkd.li/i/13313624',
            'https://i.gkd.li/i/13313576',
          ],
        },
        {
          key: 4,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""] < View[childCount=1] + View[childCount=1][text=""] +n View >(1,2) View[childCount=1] > [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12925095',
            'https://i.gkd.li/i/12925052',
          ],
        },
      ],
    },
  ],
});
