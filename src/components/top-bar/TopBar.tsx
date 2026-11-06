import styles from './TopBar.module.css'
const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1>ZERO</h1>
        <span>0.0.1 - PROJECTS</span>
      </div>
      <div className={styles.actionButtons}>
        <span>SANDBOX: 3 RUNNING</span>
        <button>Action Items: 2</button>
        <button>boards</button>
        <button>prs</button>
        <button>settings</button>
      </div>
    </div>
  )
}

export default TopBar
