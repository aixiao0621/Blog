export interface FriendOld {
  // hCard+XFN
  id: string // HTML id
  rel?: string // XFN, contact / acquaintance / friend
  link?: string // URL
  html?: string // HTML
  title?: string // 标题
  descr?: string // 描述
  avatar?: string // 头像
  name?: string // backwards compatibility
}
export type Friend = {
  id: string // HTML id
  rel?: string // XHTML Friends Network
  link?: string // URL
  html?: string // Custom HTML
  title?: string // 标题
  name?: string // 人名
  avatar?: string // 头像
  descr?: string // 描述
  class?: {
    avatar?: string // 头像类名
    img?: string // 图片类名
  }
}
export const friends: Friend[] = [
  {
    id: 'id2',
    name: 'StevenRCE0',
    title: 'rcex.live',
    link: 'https://rcex.live',
    descr: '起风了，唯有努力试着生存',
    avatar: 'https://c.rcex.live:8/IR/United@1x.png'
 },
   {
    id: 'id3',
    name: 'StevenRCE0',
    title: 'rcex.live',
    link: 'https://rcex.live',
    descr: '起风了，唯有努力试着生存',
    avatar: 'https://c.rcex.live:8/IR/Shape.svg'
 },
  {
    id: 'id1',
    name: 'Trdthg',
    title: 'trdthg.github.io',
    link: 'https://trdthg.github.io',
    descr: 'Rustt translation team member.',
    avatar: 'https://trdthg.github.io/img/logo_png.png'
  }
]
