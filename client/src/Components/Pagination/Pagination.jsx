import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Pag, Numbers } from './PaginationStyle.js'

import { pageSetter } from '../../Redux/actions'

const Pagination = () => {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)
  const [pages, setPages] = useState(page)
  const selector = useSelector((state) => state.pokedex)

  useEffect(() => {
    dispatch(pageSetter(pages))
    return dispatch(pageSetter(pages))
    // eslint-disable-next-line
  }, [pages])

  const indexes = []
  let indexAmount = selector && Math.ceil(selector.length / 12)
  for (let i = 1; i < indexAmount + 1; i++) indexes.push(i)

  const pageManager = (index) => {
    let firstPokemon = 1
    let lastPokemon = 12
    if (index > 1) {
      firstPokemon = 12 * (index - 1) + 1
      lastPokemon = 12 * index
    }
    setPages([index, firstPokemon, lastPokemon])
  }

  const isSelected = (index) => {
    if (pages[0] === index) return true
    return false
  }

  return (
    <Pag>
      {indexes &&
        indexes.map((i) => {
          return (
            <Numbers
              key={i}
              onClick={() => pageManager(i)}
              isSelected={isSelected(i)}
            >
              {i}
            </Numbers>
          )
        })}
    </Pag>
  )
}

export default Pagination
