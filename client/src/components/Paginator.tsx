import { useEffect, useState } from 'react'

interface Props {
  count: number
  page: number
  limit: number
  handleChangePage: (page: number) => void
}

const Paginator = ({ count, page, limit, handleChangePage }: Props) => {
  const [total] = useState(Math.ceil(count / limit))
  const [toShow, setToShow] = useState<number[]>([])
  const rest = 2

  const pages = Array.from({ length: total }, (_, i) => i + 1)
  const prevArr = pages.slice(
    Math.max(0, page - rest - 1),
    Math.max(0, page - 1)
  )
  const postArr = pages.slice(page, Math.min(total, page + rest))

  const handleSetToShow = () => {
    setToShow([...prevArr, page, ...postArr])
  }

  useEffect(handleSetToShow, [page, total, rest])

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 sm:flex-row'>
      <button
        onClick={() => {
          handleChangePage(page - 1)
        }}
        className={`${page === 1 ? 'hidden' : ''}`}
      >
        Anterior
      </button>
      <div className='flex gap-2'>
        {toShow.map((item, index) => (
          <button
            className={`p-1 ${
              item === page
                ? '!cursor-default rounded-sm bg-blue-800 text-white'
                : ''
            }`}
            onClick={() => {
              handleChangePage(item)
            }}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          handleChangePage(page + 1)
        }}
        className={`${page === total ? 'hidden' : ''}`}
      >
        Siguiente
      </button>
    </div>
  )
}

export default Paginator
