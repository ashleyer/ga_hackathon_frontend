import styles from './Landing.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>
        Split payment tracking made easy
      </h1>
      <h2>Split the cost of an event with friends</h2>
      <img src='http://rockcontent.com/wp-content/uploads/2021/02/interactive-calculator.png' alt='calculator'/>
      
      <button>Start</button>
      
    </main>
  )
}

export default Landing