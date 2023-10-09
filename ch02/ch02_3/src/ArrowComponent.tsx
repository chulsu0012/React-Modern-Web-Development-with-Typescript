import type {FC} from 'react'
// type: 자바스크립트 -> 컴파일할 때만 필요하며
// 컴파일 후 자바스크립트 코드에서 타입 관련 내용이 완전히 제거된다.

export type ArrowComponentProps = {
  href: string
  text: string
}
const ArrowComponent: FC<ArrowComponentProps> = props => {
  const {href, text} = props
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  )
}
export default ArrowComponent