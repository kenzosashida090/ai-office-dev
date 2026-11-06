import styles from './layout.module.css'

import TopBar from "./top-bar/TopBar"
type LayoutProps = {
  children: React.ReactNode
  isPanelOpen: boolean
}

const Layout = ({ children, isPanelOpen }: LayoutProps) => {
  return (
    <div data-panel={isPanelOpen ? "open" : "closed"} className={styles.layout}>
      <TopBar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
