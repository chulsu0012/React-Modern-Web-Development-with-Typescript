import ReactDOM from 'react-dom/client';
import * as D from './data'

// const children = [0, 1, 2].map((n: number) => <h3>Hello world! {n}</h3>)
// const rootVirtualDOM = <div>{children}</div>

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src = {D.randomAvatar()} width={100} height={100} />
  </div>
))
const rootVirtualDOM = <div>{children}</div>


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)