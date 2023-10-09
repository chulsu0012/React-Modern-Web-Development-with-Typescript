document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click occurs.', isTrusted, target, bubbles)
})
// optional chaining 연산자 ?. 사용 이유:
// getElementById 메서드가 null값을 반환할 수 있기 때문

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click also occurs.', isTrusted, target, bubbles)
})

export default function EventListener() {
  return <div>EventListener</div>
}