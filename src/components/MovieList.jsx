import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import HrMovieCard from './HrMovieCard'


const MovieList = ({ genreId, index_ }) => {

  const [movieList, setMovieList] = useState([])

  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [])

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then(resp => {
      // console.log(resp.data.results)
      // bunlar film listesi
      setMovieList(resp.data.results)
    })
  }

  const sliderRight= (element) => {
    element.scrollLeft += 500;
}
const sliderLeft= (element) => {
    element.scrollLeft -= 500;
}


  return (
    <div className='relative'>
      <IoChevronBackOutline
        onClick={() => sliderLeft(elementRef.current)}
        className={`text-white text-[50px] cursor-pointer p-2 z-10 hidden md:block 
            absolute  ${index_%3 ===0 ? "mt-[80px]" : "mt-[150px]" }  `}
      />

      <div ref={elementRef}
      className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth
    pt-4 px-3 pb-4'>
        {movieList.map((item, index) => (
          <>
          {index_ %3 == 0 ? <HrMovieCard movie={item}/> 
          :  <MovieCard movie={item} /> }
          </>
        ))}
      </div>

      <IoChevronForwardOutline
       className={`hidden md:block text-white text-[50px]
       absolute p-2 z-10 top-0 right-0 ${index_%3 ===0 ? "mt-[80px]" : "mt-[150px]" }  cursor-pointer`}
        onClick={() => sliderRight(elementRef.current)}
      />

    </div>

  )
}

export default MovieList