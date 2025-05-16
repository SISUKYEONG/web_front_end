import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/todos', label: 'Todos' }
]

export default function Header() {
  return (
    <header className="flex gap-[10px]">
      {navigations.map(nav => (
        <NavLink
          to={nav.to}
          className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
          {nav.label}
        </NavLink>
      ))}
    </header>
  )
}

// a태그는 페이지 이동 시 새로고침이 발생
// 완전히 다른 사이트로 이동할 때 a 태그를 사용
// header는 렌러딩할 필요가 없다

// NavLink에서 classNAme에 함수를 사용할 수 있다.
