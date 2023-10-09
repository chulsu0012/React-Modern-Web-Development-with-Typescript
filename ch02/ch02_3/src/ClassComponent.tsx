import {Component} from 'react'
// impot type: 자바스크립트 -> 컴파일할 때만 필요
// 컴파일 후 자바스크립트 코드에서 타입 관련 내용이 완전히 제거된다.

export type ClassComponentProps = {
  href: string
  text: string
}

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const {href, text} = this.props
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
  }
}