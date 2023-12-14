import { useLocation } from 'react-router-dom'
const Breadcrumb = () => {
  const location = useLocation()

  let isHome = false
  let label
  let links: any[] = [
    {
      label: 'Página Inicial',
      url: '/',
      home: true,
    },
  ]

  if (location.pathname === '/formularios') label = 'Formulários'
  if (location.pathname === '/sign-in') label = 'Sign-In'
  if (location.pathname === '/cookiebar') label = 'Cookiebar'

  links.push({
    label: label,
    url: location.pathname,
    active: true,
  })

  if (location.pathname === '/') isHome = true

  return !isHome ? <br-breadcrumb label="Breadcrumb" links={JSON.stringify(links)}></br-breadcrumb> : null
}

export default Breadcrumb
