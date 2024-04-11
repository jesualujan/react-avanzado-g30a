import SongList from '@/Components/SongList/SongList'
import SongDetail from '@/Components/SongDetail/SongDetail'
import { SongProvider } from '@/Context/SongContex'
import './home.css'

const Home = () => {
  return (
    <SongProvider>
      <div className='home-container'>
        <div className='left'>
          <p>lado zquierdo</p>
          <SongList />
        </div>
        <div className='right'>
          <p>lado Derecho</p>
          <SongDetail />
        </div>
      </div>
    </SongProvider>
  )
}

export default Home
