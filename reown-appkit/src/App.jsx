import React from 'react'
import ConnectButton from './components/ConnectButton'
import NetworkSwitcher from './components/NetworkSwitcher'

const App = () => {
  return (
    <div>
      <header style={styles.header}>
        <h2 style={styles.logo}>My Web3 App</h2>
        <div style={styles.connect}>
          <ConnectButton />
        </div>
      </header>

      <main style={styles.main}>
        <h3>Welcome to the Web3 AppKit Demo</h3>
        <NetworkSwitcher />
      </main>
    </div>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
    borderBottom: '1px solid #ccc',
    alignItems: 'center'
  },
  logo: {
    margin: 0
  },
  connect: {
    minWidth: '240px',
    textAlign: 'right'
  },
  main: {
    padding: '24px',
    textAlign: 'center'
  }
}

export default App
