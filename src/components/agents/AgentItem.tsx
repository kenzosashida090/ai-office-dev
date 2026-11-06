import type { Agent } from './AgentList'
import styles from './agents.module.css'
type AgentItemProps = {
  agent: Agent
}
const AgentItem = ({ agent }: AgentItemProps) => {
  return (
    <div className={styles.agentCard}>
      <div className={styles.agentImage} />
      <div className={styles.agentDescription}>
        <p className={styles.name}>{agent.name}</p>
        <p className={styles.meta}>{agent.status}</p>
        <p className={styles.meta}>{agent.task}</p>
      </div>
    </div>
  )
}

export default AgentItem
