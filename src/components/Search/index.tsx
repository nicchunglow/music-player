import React, { useEffect, useState } from 'react'
import PurpleSearch from '../../assets/PurpleSearch.svg'
import Button from '../Button'

type SearchProps = {
  placeholder: string
  onChange: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ placeholder, onChange }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const setOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onChange(searchTerm)
    }, 500)

    return () => {
      clearTimeout(debounceTimer)
    }
  }, [searchTerm, onChange])

  return (
    <>
      <span className='flex h-40 w-11/12 items-start justify-between pt-5 md:h-48 md:w-10/12 lg:w-3/5 lg:max-w-[700px]'>
        <input
          type='text'
          aria-label='search-input'
          className='mr-5 flex h-[60px] w-9/12 rounded-3xl bg-white bg-opacity-20 px-4 sm:w-11/12'
          id='search-input'
          name='search-input'
          placeholder={placeholder}
          onChange={setOnChange}
        />
        <Button imgSrc={PurpleSearch} altText='country-search-button' />
      </span>
    </>
  )
}

export default Search
