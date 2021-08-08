import Filters from '../components/filters'
import LineChart from '../components/lineChart'
import WithAdvertisingData from '../context/advertisingData'
import styles from './dashboard.module.css'

const Dashboard = () => {
    return (
        <WithAdvertisingData>
            <div className={styles.container}>
                <Filters />
                <LineChart />
            </div>
        </WithAdvertisingData>
    )
}

export default Dashboard
