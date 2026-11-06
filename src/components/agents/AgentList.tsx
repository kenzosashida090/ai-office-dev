import AgentItem from './AgentItem'
import styles from './agents.module.css'
export type Agent = { id: string; name: string; status: string; task: string };

const agents: Agent[] = [
  { id: "a1", name: "John", status: "IDLE", task: "Waiting for you" },
  { id: "a2", name: "Zacarias", status: "WORKING", task: "P3K-T02 AI functions" },
  { id: "a3", name: "Judas", status: "IDLE", task: "P3K-T01 DB functions" },
];

const AgentList = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>SELECT AGENT:</h3>
      <div className={styles.agentsList}>
        {agents.map((agent) => (
          <AgentItem key={agent.id} agent={agent} />
        ))}
      </div>
      <div className={styles.footer}>
        <p>This is the footer</p>
      </div>
    </div>
  );

}


export default AgentList
