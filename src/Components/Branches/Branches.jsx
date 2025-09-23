import './Locations.css'

const locations = [
  "GTB Nagar",
  "Pitampura",
  "Yamuna Vihar",
  "Nangloi",
  "Daryaganj",
  "Shubash Nagar",
  "Nirman Vihar",
  "Lajpat Nagar",
  "Badarpur",
  "Deoli Khanpur"
]

function Branches() {
  return (
    <div className='w-full bg-white pb-16'>
      <h2 className="heading-1 text-center text-text">
        Branches in Delhi
      </h2>
      <div className='w-full px-4 py-6 overflow-hidden'>
        <div className="w-auto flex gap-5 locations-row">
          {
            locations.map(location => {
              return (
                <h4 className='text-text text-2xl font-semibold md:text-3xl shrink-0 cursor-pointer' key={location}  style={{ fontFamily: 'Montserrat' }}>
                  {location}
                </h4>
              )
            })
          }
          {
            locations.map(location => {
              return (
                <h4 className='text-text text-2xl font-semibold md:text-3xl shrink-0 cursor-pointer' key={location}  style={{ fontFamily: 'Montserrat' }}>
                  {location}
                </h4>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Branches
