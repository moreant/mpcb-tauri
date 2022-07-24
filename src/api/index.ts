import request from '@/utils/request'
import qs from 'qs'
import OOS from '@/utils/OOS'
import { AlbumList, Basic, DirList, Sig } from '@/types'

let oos: OOS

const api = {
  sig: 'https://mzstorage.meizu.com/file/get_sig',
  dirList: 'https://mzstorage.meizu.com/album/dir/list',
  albumList: 'https://mzstorage.meizu.com/album/list'
}

export const getInfo = async (token: string) => {
  const params = {
    type: '2',
    token
  }
  const res = await request
    .post<any, Basic<Sig>>(api.sig, qs.stringify(params))
  oos = new OOS(res.value)
}

export const getDir = (token: string) => {
  const params = {
    limit: 1000,
    order: 1,
    token
  }
  return request.post<void, Basic<DirList>>(api.dirList, qs.stringify(params))
}

export const getList = (
  token: string,
  dirId: number,
  fileNum: number = 10000
) => {
  const params = {
    order: 1,
    offset: 0,
    limit: fileNum,
    dirId,
    token
  }
  return request.post<void, Basic<AlbumList>>(
    api.albumList,
    qs.stringify(params)
  )
}

// export const downImg = async (dir: string, url: string, fileName: string) => {
//   await window.fs.promises.mkdir(dir, { recursive: true })
//   const res = await oos.getBuffer(url)
//   await window.fs.promises.writeFile(`${dir}/${fileName}`, res.content)
// }

export const getIcon = (url: string) => oos.getUrl(url)
