import P from './P'

export default function App() {
  const texts = [<p>hello</p>, <p>world</p>]
                        .map((text,index) => <P key={index} children={text}/>)
  return <div children={texts} />
}