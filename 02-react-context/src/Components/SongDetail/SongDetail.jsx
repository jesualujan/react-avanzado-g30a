import { useSongContext } from '@/Hook/useSongContext'

const SongDetail = () => {
  const { selectedSong } = useSongContext()
  return (
    <>
      {
        selectedSong.title
          ? (
            <div>
              <img src={selectedSong.img_url} alt={selectedSong.title} />
              <h4>{selectedSong.title}</h4>
              <h5>{selectedSong.artist}</h5>
              <h6>{selectedSong.year}</h6>
            </div>
            )
          : <h1> selecciona una canción...</h1>
      }
    </>
  )
}

export default SongDetail
